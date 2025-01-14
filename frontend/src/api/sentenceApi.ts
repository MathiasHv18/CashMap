import axiosInstance from "./axiosInstance";

export const getAllSentences = async () => {
  const response = await axiosInstance.get("/sentence");
  return response.data;
};

export const getSentenceById = async (id: number) => {
  const response = await axiosInstance.get(`/sentence/${id}`);
  return response.data;
};
