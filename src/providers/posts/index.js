import axios from 'axios';

export const getPosts = () => {
    return axios.get('https://server-posts.herokuapp.com');
}

export const deletePost = (id) => {
    return axios.delete(`https://server-posts.herokuapp.com/post/${id}`);
}

export const createPost = (postData) => {
    return axios.post(`https://server-posts.herokuapp.com/`, {
        ...postData
    });
}

export const getPost = (id) => {
    return axios.get(`https://server-posts.herokuapp.com/post/${id}`);
}

export const updatePost = (postData) => {
    return axios.put(`https://server-posts.herokuapp.com/`, {
        ...postData
    });
}