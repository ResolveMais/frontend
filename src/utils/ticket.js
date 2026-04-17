export const TICKET_STATUS = Object.freeze({
  ABERTO: "aberto",
  PENDENTE: "pendente",
  RESOLVIDO: "resolvido",
  FECHADO: "fechado",
  FINALIZADO: "finalizado",
});

export const TICKET_SENDER_TYPE = Object.freeze({
  CLIENTE: "cliente",
  FUNCIONARIO: "funcionario",
  EMPRESA: "empresa",
  BOT: "bot",
  SISTEMA: "sistema",
});

const normalizeValue = (value) => String(value || "").trim().toLowerCase();
const BOT_SENDER_NAMES = Object.freeze(["resolve assist"]);

export const getUserInitials = (name, fallback = "US") => {
  const normalizedName = String(name || "").trim();

  if (!normalizedName) return fallback;

  const names = normalizedName.split(" ").filter(Boolean);

  if (names.length === 1) {
    return names[0].slice(0, 2).toUpperCase();
  }

  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
};

export const buildTicketProtocol = (ticketId) =>
  `3330${String(ticketId || "").padStart(4, "0")}`;

export const getTicketStatusLabel = (status) => {
  switch (String(status || "").toLowerCase()) {
    case TICKET_STATUS.ABERTO:
      return "Aberto";
    case TICKET_STATUS.PENDENTE:
      return "Pendente";
    case TICKET_STATUS.RESOLVIDO:
      return "Resolvido";
    case TICKET_STATUS.FECHADO:
    case TICKET_STATUS.FINALIZADO:
      return "Fechado";
    default:
      return "Em andamento";
  }
};

export const getTicketStatusTone = (status) => {
  switch (String(status || "").toLowerCase()) {
    case TICKET_STATUS.ABERTO:
      return "warning";
    case TICKET_STATUS.PENDENTE:
      return "danger";
    case TICKET_STATUS.RESOLVIDO:
      return "success";
    case TICKET_STATUS.FECHADO:
    case TICKET_STATUS.FINALIZADO:
      return "neutral";
    default:
      return "neutral";
  }
};

export const getConversationModeLabel = (ticket) => {
  if (!ticket) return "Sem ticket selecionado";

  if (ticket.status === TICKET_STATUS.ABERTO) {
    return "Chatbot em atendimento";
  }

  if (ticket.status === TICKET_STATUS.PENDENTE) {
    if (ticket.assignedEmployee?.name) {
      return `Atendimento humano com ${ticket.assignedEmployee.name}`;
    }
    return "Atendimento humano aguardando responsavel";
  }

  if (ticket.status === TICKET_STATUS.RESOLVIDO) {
    return "Aguardando confirmacao do cliente";
  }

  return "Chamado encerrado";
};

const isLikelyBotMessage = (message) => {
  const normalizedRole = normalizeValue(message?.role);
  const normalizedSenderName = normalizeValue(message?.senderName);

  if (message?.senderType === TICKET_SENDER_TYPE.BOT) return true;
  if (BOT_SENDER_NAMES.includes(normalizedSenderName)) return true;

  return normalizedRole === "assistant" && !message?.senderType && !message?.senderUserId;
};

export const getMessageSenderLabel = (message) => {
  const normalizedRole = normalizeValue(message?.role);

  switch (message?.senderType) {
    case TICKET_SENDER_TYPE.CLIENTE:
      return message.senderName || "Cliente";
    case TICKET_SENDER_TYPE.FUNCIONARIO:
      return message.senderName || "Atendente";
    case TICKET_SENDER_TYPE.EMPRESA:
      return message.senderName || "Empresa";
    case TICKET_SENDER_TYPE.BOT:
      return message.senderName || "Resolve Assist";
    case TICKET_SENDER_TYPE.SISTEMA:
      return message.senderName || "Sistema";
    default:
      if (message?.senderName) return message.senderName;
      if (normalizedRole === "system") return "Sistema";
      if (normalizedRole === "user") return "Cliente";
      if (normalizedRole === "assistant") {
        if (isLikelyBotMessage(message)) {
          return "Resolve Assist";
        }
        return "Atendente";
      }
      return "Mensagem";
  }
};

export const getMessageTagLabel = (message) => {
  const normalizedRole = normalizeValue(message?.role);

  switch (message?.senderType) {
    case TICKET_SENDER_TYPE.CLIENTE:
      return "Cliente";
    case TICKET_SENDER_TYPE.FUNCIONARIO:
      return "Atendente";
    case TICKET_SENDER_TYPE.EMPRESA:
      return "Empresa";
    case TICKET_SENDER_TYPE.BOT:
      return "Chatbot";
    case TICKET_SENDER_TYPE.SISTEMA:
      return "Sistema";
    default:
      if (normalizedRole === "system") return "Sistema";
      if (normalizedRole === "user") return "Cliente";
      if (normalizedRole === "assistant") {
        return isLikelyBotMessage(message) ? "Chatbot" : "Atendente";
      }
      return "Mensagem";
  }
};

export const getMessageUiMeta = (
  message,
  { viewerType = "customer", ticketStatus = "" } = {}
) => {
  const normalizedRole = normalizeValue(message?.role);
  const resolvedSenderLabel = getMessageSenderLabel(message, { ticketStatus });
  const tagLabel = getMessageTagLabel(message, { ticketStatus });
  const isSystemMessage =
    message?.senderType === TICKET_SENDER_TYPE.SISTEMA ||
    normalizedRole === "system";
  const isCustomerMessage =
    message?.senderType === TICKET_SENDER_TYPE.CLIENTE ||
    (!message?.senderType && normalizedRole === "user");
  const isBotMessage = isLikelyBotMessage(message);
  const isSupportMessage =
    [TICKET_SENDER_TYPE.FUNCIONARIO, TICKET_SENDER_TYPE.EMPRESA].includes(
      message?.senderType
    ) ||
    (!message?.senderType && normalizedRole === "assistant" && !isBotMessage);

  if (isSystemMessage) {
    return {
      align: "center",
      variant: "system",
      senderLabel: resolvedSenderLabel,
      tagLabel,
      avatarText: "SI",
      isSystem: true,
    };
  }

  if (isCustomerMessage) {
    const isOutgoing = viewerType === "customer";
    const senderLabel = isOutgoing ? "Você" : resolvedSenderLabel;

    return {
      align: isOutgoing ? "right" : "left",
      variant: "customer",
      senderLabel,
      tagLabel,
      avatarText: getUserInitials(senderLabel, "CL"),
      avatarUrl: null,
      isSystem: false,
    };
  }

  if (isBotMessage) {
    return {
      align: "left",
      variant: "bot",
      senderLabel: resolvedSenderLabel,
      tagLabel,
      avatarText: "AI",
      isSystem: false,
    };
  }

  if (isSupportMessage) {
    const isOutgoing = viewerType !== "customer";

    return {
      align: isOutgoing ? "right" : "left",
      variant: "support",
      senderLabel: resolvedSenderLabel,
      tagLabel,
      avatarText: getUserInitials(resolvedSenderLabel, "AT"),
      avatarUrl: null,
      isSystem: false,
    };
  }

  return {
    align: "left",
    variant: "support",
    senderLabel: resolvedSenderLabel,
    tagLabel,
    avatarText: getUserInitials(resolvedSenderLabel, "MS"),
    avatarUrl: null,
    isSystem: false,
  };
};

export const formatDateTime = (dateValue) => {
  if (!dateValue) return "-";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatCompactDateTime = (dateValue) => {
  if (!dateValue) return "-";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
