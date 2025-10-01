import { API } from "../axiosConfig";

export const getCategories = async () => {
    const url = `api/category`;
    return await API.get(url);
}