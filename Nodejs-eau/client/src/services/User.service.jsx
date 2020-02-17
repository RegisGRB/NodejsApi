import React from "react";
import jwtDecode from "jwt-decode";

const url = "http://localhost:3301/api/golf";
const headers = {
  "Content-Type": "application/json"
};

export default class Userservice extends React.Component {
  create(body) {
    return fetch(url + "/users", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  getusersDetail(id) {
    return fetch(url + "/users/id/" + id, {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token"),"Content-Type": "application/json" }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  getusers() {
    return fetch(url + "/users/all", {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  Edituser(idx, bodyx) {
    return fetch(url + "/users/idupdate/" + idx, {
      method: "PUT",
      headers: { "x-access-token": localStorage.getItem("token"),"Content-Type":"application/json" },
      body: JSON.stringify(bodyx),
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  removeuser(id) {
    return fetch(url + "/users/idremove/" + id, {
      method: "DELETE",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }
}
