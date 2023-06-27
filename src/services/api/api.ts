import axiosInstance from "../../commons/requests/axiosInstance";

const api = {
  getFeed: async () => {
    try {
      const response = await axiosInstance.get("/feed");
      return response.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  },
};

export default api;
