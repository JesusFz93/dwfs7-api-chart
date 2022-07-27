import {
  getPostsApi,
  getPostApi,
  createPostApi,
  updatePostApi,
  deletePostApi,
} from "../apis/posts.js";

export const getPostsEvent = async () => {
  const { data } = await getPostsApi();
  console.log(data);
};

export const getPostEvent = async () => {
  const { data } = await getPostApi();
  console.log(data);
};

export const createPostEvent = async () => {
  const { data } = await createPostApi();
  console.log(data);
};

export const updatePostEvent = async () => {
  const { data } = await updatePostApi();
  console.log(data);
};

export const deletePostEvent = async () => {
  const { data } = await deletePostApi();
  console.log(data);
};
