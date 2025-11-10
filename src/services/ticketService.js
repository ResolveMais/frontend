import { api } from './api';

export const ticketService = {
  // Buscar todos os tickets do usuário
  getUserTickets: () => api.get('/tickets/my-tickets'),

  // Buscar apenas tickets pendentes
  getUserPendingTickets: () => api.get('/tickets/user-pending-tickets'),

  // Criar novo ticket
  createTicket: (data) => api.post('/tickets/create', data),

  // Buscar empresas
  getCompanies: () => api.get('/tickets/companies'),

  // Buscar títulos de reclamação de uma empresa
  getComplaintTitles: (companyId) =>
    api.get(`/tickets/complaint-titles/${companyId}`),

  getRecentUpdates: async () => {
    try {
      const response = await api.get('/tickets/recent-updates');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atualizações:', error);
      throw error;
    }
  }
};

export default ticketService;