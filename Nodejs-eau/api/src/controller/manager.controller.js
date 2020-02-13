const Manager = require("../models/manager.model");
const bcrypt = require("bcrypt");
exports.create = (req, res) => {
  // req valeur qu'on recupere res resultat

  const Manager = new manager({
    Nom: req.body.Nom,
    Prenom:req.body.Prenom,
    Mail: req.body.Mail,
    Tel: req.body.Tel
  });

  /*if (err) {
    res.send(err);
  } else {*/
  Manager
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
  Manager.find()
    .then(Managers => {
      res.send(Managers);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Managers"
      });
    });
};


exports.findById = (req, res) => {
  Manager.findById(req.params.id)
    .then(Manager => {
      res.send(Manager);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Managers"
      });
    });
};


exports.findByIdAndUpdate = (req, res) => {
  Manager.findOneAndUpdate(req.body.id, req.body)
    .then(Manager => {
      res.send(Manager);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Managers"
      });
    });
};





//params c'est les valeurs dans l'url
exports.findByIdAndRemove= (req, res) => {
  Manager.findByIdAndRemove(req.params.id)
    .then(Manager => {
      res.send(Manager);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Managers"
      });
    });
};



exports.removeALL= (req, res) => {
  Manager.remove()
    .then(Managers => {
      res.send(Manager);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Managers"
      });
    });
};
//}
