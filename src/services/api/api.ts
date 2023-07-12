import axiosInstance from "../../commons/requests/axiosInstance";

const api = {
  getNewsfeed: async (page: number = 1, size: number = 20) => {
    try {
      const basePath = "/newsfeed/";
      const path = `${basePath}?page=${page}&size=${size}`;

      const response = await axiosInstance.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
