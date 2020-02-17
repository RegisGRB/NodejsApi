import React from "react";
import jwtDecode from "jwt-decode";

const url = "http://localhost:3301/api/golf";
const headers = {
  "Content-Type": "application/json"
};

export default class Golfservice extends React.Component {
  create(body) {
    return fetch(url + "/golfs", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  getgolfsDetail(id) {
    return fetch(url + "/golfs/id/" + id, {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  getgolfs() {
    return fetch(url + "/golfs/all", {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  Editgolf(idx, bodyx) {
    return fetch(url + "/golfs/idupdate/" + idx, {
      method: "PUT",
      headers: { "x-access-token": localStorage.getItem("token"),"Content-Type":"application/json" },
      body: JSON.stringify(bodyx),
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  removeGolf(id) {
    return fetch(url + "/golfs/idremove/" + id, {
      method: "DELETE",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }
}
