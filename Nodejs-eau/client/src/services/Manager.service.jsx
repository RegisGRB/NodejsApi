import React from "react";
import jwtDecode from "jwt-decode";

const url = "http://localhost:3301/api/golf";
const headers = {
  "Content-Type": "application/json"
};

export default class ManagerService extends React.Component {
  create(body) {
    return fetch(url + "/managers", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  /*getmanagersDetail(id) {
    return fetch(url + "/managers/id/" + id, {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }*/

  getmanagers() {
    return fetch(url + "/managers/all", {
      method: "GET",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  Editmanager(idx, bodyx) {
    return fetch(url + "/managers/idupdate/" + idx, {
      method: "PUT",
      headers: { "x-access-token": localStorage.getItem("token"),"Content-Type":"application/json" },
      body: JSON.stringify(bodyx),
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }

  removeManager(id) {
    return fetch(url + "/managers/idremove/" + id, {
      method: "DELETE",
      headers: { "x-access-token": localStorage.getItem("token") }
    }).then(function(res) {
      console.log(res);
      return res.json();
    });
  }
}
