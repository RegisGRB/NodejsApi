const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.create = (req,res) => {
  // req valeur qu'on recupere res resultat
  let hashedpassword = bcrypt.hashSync(req.body.password,8);
  const user = new User({
    email: req.body.email,
    password: hashedpassword,
    firstname: req.body.lastname,
    admin: req.body.admin
  });

  /*if (err) {
    res.send(err);
  } else {*/
    user.save().then(data => {
        let token =jwt.sign({
          id:user.email,
          admin:user.admin
        },"golfsecretkey",{
          expiresIn:86400
        })
        res.send({
          auth:true,
          token:token,
          body:data// tu peux renvoyer se que tu veux si tu veux juste lemail tu fait body:{email:data.email}
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        })
      });
  }
  
  exports.login = (req,res)=>{
    
    User.findOne({
      email:req.body.email
    }).then(user => {
      let token =jwt.sign({
        id:user.email,
        admin:user.admin
      },"golfsecretkey",{
        expiresIn:86400
      })
      if(bcrypt.compareSync(req.body.password,user.password)){
        res.send({
          auth:true,
          token:token,
          body:user
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
/*
etape 1: rechercher en base le user (avec email)
etape 2: verifier si le mdp est le meme que dans la base
etape 3: generer un nouveau token et on lenvoie dans la reponse
*/

  }

  
//}
