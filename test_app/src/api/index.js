import ApiService from "../services/ApiService";

const Service = new ApiService();

export const loginUser = async (data) => Service.postData("/login", data);
export const registerUser = async (data) => Service.postData("/register", data);

// article routes
export const getArticles = async () =>
  Service.getData("/articles");
export const getMyArticles = async () => Service.getData("/user/articles");
export const getArticleById = async (data) =>
  Service.getData("/articles/" + data);
export const storeArticle = async (data) =>
  Service.postData("/articles/store", data);

export const updateArticle = async (id,data) =>
  Service.postData("/articles/update/"+id, data);

export const deleteArticle = async (data) =>
  Service.getData("/articles/delete/"+data);
