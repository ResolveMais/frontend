import { api } from './api';

export const ticketService = {
  create: async (ticketData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.post('/tickets/create', ticketData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar ticket:', error);
      throw error;
    }
  },

  getCompanies: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/tickets/companies', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      throw error;
    }
  },

  getComplaintTitles: async (companyId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get(`/tickets/complaint-titles/${companyId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar assuntos:', error);
      throw error;
    }
  },

  getUserTickets: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/tickets/my-tickets', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar tickets:', error);
      throw error;
    }
  },

  getUserClosedTickets: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/tickets/user-closed-tickets', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar tickets finalizados:', error);
      throw error;
    }
  },

  // ✅ NOVO MÉTODO: Buscar tickets abertos e pendentes
  getUserOpenAndPendingTickets: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/tickets/user-open-pending-tickets', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar tickets abertos/pendentes:', error);
      throw error;
    }
  },

  getRecentUpdates: async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await api.get('/tickets/recent-updates', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atualizações:', error);
      throw new Error('Não foi possível carregar as atualizações');
    }
  }
};

export default ticketService;