export const USER_TYPES = Object.freeze({
  CLIENTE: "cliente",
  FUNCIONARIO: "funcionario",
  EMPRESA: "empresa",
});

export const USER_TYPE_OPTIONS = Object.freeze([
  { value: USER_TYPES.CLIENTE, label: "Cliente" },
  { value: USER_TYPES.FUNCIONARIO, label: "Funcionario" },
  { value: USER_TYPES.EMPRESA, label: "Empresa" },
]);

export const PUBLIC_REGISTER_USER_TYPE_OPTIONS = Object.freeze([
  { value: USER_TYPES.CLIENTE, label: "Cliente" },
  { value: USER_TYPES.EMPRESA, label: "Empresa" },
]);

const USER_TYPE_ALIASES = Object.freeze({
  cliente: USER_TYPES.CLIENTE,
  client: USER_TYPES.CLIENTE,
  funcionario: USER_TYPES.FUNCIONARIO,
  employee: USER_TYPES.FUNCIONARIO,
  empresa: USER_TYPES.EMPRESA,
  company: USER_TYPES.EMPRESA,
});

export const normalizeUserType = (userType) => {
  if (!userType) return USER_TYPES.CLIENTE;
  return USER_TYPE_ALIASES[String(userType).trim().toLowerCase()] || USER_TYPES.CLIENTE;
};

export const getHomePathByUserType = (userType) => {
  const normalizedType = normalizeUserType(userType);

  if (normalizedType === USER_TYPES.EMPRESA) return "/empresa/home";
  if (normalizedType === USER_TYPES.FUNCIONARIO) return "/funcionario/home";
  return "/cliente/home";
};

export const isCompanyUser = (userType) => normalizeUserType(userType) === USER_TYPES.EMPRESA;
