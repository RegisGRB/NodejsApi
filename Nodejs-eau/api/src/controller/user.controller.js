const User = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.create = (req, res) => {
  // req valeur qu'on recupere res resultat
  let hashedpassword = bcrypt.hashSync(req.body.password, 8);
  const user = new User({
    email: req.body.email,
    password: hashedpassword,
    firstname: req.body.lastname,
    admin: req.body.admin
  });

  /*if (err) {
    res.send(err);
  } else {*/
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding users"
      });
    });
};


exports.findById = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding users"
      });
    });
};


exports.findByIdAndUpdate = (req, res) => {
  User.findOneAndUpdate(req.body.id, req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding users"
      });
    });
};





//params c'est les valeurs dans l'url
exports.findByIdAndRemove= (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding users"
      });
    });
};



exports.removeALL= (req, res) => {
  User.remove()
    .then(users => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding users"
      });
    });
};
//}
