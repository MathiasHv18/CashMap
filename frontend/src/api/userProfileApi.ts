import axiosInstance from "./axiosInstance";
import { User } from "../interfaces/UserProfileInterface";

export const getUserProfile = async () => {
    const response = await axiosInstance.get("/user/profile");
    return response.data;
}