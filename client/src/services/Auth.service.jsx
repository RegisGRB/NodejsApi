import React from "react";
import jwtDecode from "jwt-decode";

const url = "http://localhost:3301/api/golf";
const headers = {
    "Content-Type": "application/json"
  };


export default class AuthLogin extends React.Component {
    
    
 login(body){
   
     return fetch(url+"/auth/login", {
        method:'POST',
        headers,
        body:JSON.stringify(body)
    }).then(function(res){
        console.log(res);
        return res.json();
    })
   
 }

 getuserDetail(id){
    fetch(url+"/users/"+id).then(function(res){
        return res.json();
    })
}

getuserProfil(){
return jwtDecode(this.getToken());
}
}


