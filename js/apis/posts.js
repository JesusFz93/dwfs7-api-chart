import { getId, getForm } from "../utils/posts.js";
const postApi = "https://jsonplaceholder.typicode.com";
import { makeChart } from '../chart/chart.js';

export const getPostsApi = async () => {
  makeChart();
  return await axios.get(`${postApi}/posts`);

};

export const getPostApi = async () => {
  return await axios.get(`${postApi}/posts/${getId()}`);
};

export const createPostApi = async () => {
  return await axios.post(`${postApi}/posts`, getForm());
};

export const updatePostApi = async () => {
  return await axios.put(`${postApi}/posts/${getId()}`, getForm());
};

export const deletePostApi = async () => {
  return await axios.delete(`${postApi}/posts/${getId()}`);
};
