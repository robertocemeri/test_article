
export default class StorageService {
  getToken() {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  }

  setToken(userToken) {
    localStorage.setItem("token", userToken);
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  getUser() {
    let user = localStorage.getItem("user");
    if (user !== null) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.setItem("user");
  }
}
