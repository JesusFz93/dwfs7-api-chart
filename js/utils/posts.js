const txtPostId = document.getElementById("txtPostId");
const txtPostTitle = document.getElementById("txtPostTitle");
const txtPostBody = document.getElementById("txtPostBody");
const txtPostUserId = document.getElementById("txtPostUserId");

export const getId = () => {
  return txtPostId.value;
};

export const getForm = () => {
  return {
    body: txtPostBody.value,
    title: txtPostTitle.value,
    userId: txtPostUserId.value,
  };
};
