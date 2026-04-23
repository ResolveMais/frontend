import { api } from "./api";

export const companyService = {
  getAll: async () => {
    const response = await api.get("/companies/all");
    return response.data?.result || [];
  },

  getPublicDashboard: async (companyId) => {
    const response = await api.get(`/companies/${companyId}/public-dashboard`);
    return response.data;
  },
};

export default companyService;
