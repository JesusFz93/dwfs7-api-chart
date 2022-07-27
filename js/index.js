import {
  getPostsEvent,
  getPostEvent,
  createPostEvent,
  updatePostEvent,
  deletePostEvent,
} from "./events/posts.js";

const btnGetPosts = document.getElementById("btnGetPosts");
const btnGetPost = document.getElementById("btnGetPost");
const btnCreatePost = document.getElementById("btnCreatePost");
const btnUpdatePost = document.getElementById("btnUpdatePost");
const btnDeletePost = document.getElementById("btnDeletePost");

btnGetPosts.addEventListener("click", getPostsEvent);
btnGetPost.addEventListener("click", getPostEvent);
btnCreatePost.addEventListener("click", createPostEvent);
btnUpdatePost.addEventListener("click", updatePostEvent);
btnDeletePost.addEventListener("click", deletePostEvent);
