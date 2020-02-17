import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:3301/api/golf";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/auth/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/auth/register`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};