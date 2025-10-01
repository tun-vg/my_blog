import apiConfig, { API } from "../axiosConfig";

export const getPostsTrending = () => {
    const url = `/api/post/get-posts-trending?month=8&year=2025&size=4`;
    return API.get(url);
}

export const getFeaturedPosts = () => {
    const url = `/api/post/get-posts?page=1&pageSize=4`;
    return API.get(url);
}

export const getRecommendedPosts = () => {
    const url = `/api/post/get-posts?page=1&pageSize=10`;
    return API.get(url);
}

export const getPostsById = (postId) => {
    const url = `/api/post/get-post/${postId}`;
    return API.get(url);
}

export const addPost = (post) => {
    const url = `/api/post/create-post`;
    return API.postForm(url, post);
}

export const updatePost = (post) => {
    const url = `/api/post/update-post`;
    return API.put(url, post);
}

export const getPosts = (paging) => {
    const url = `/api/post/get-posts?page=${paging.page}&pageSize=${paging.pageSize}&search=${paging.search}&sortBy=${paging.sortBy}&isDescending=${paging.isDescending}`;
    return API.get(url);
}