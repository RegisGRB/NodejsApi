const Golf = require("../models/golf.model");
const bcrypt = require("bcrypt");
exports.create = (req, res) => {
  // req valeur qu'on recupere res resultat

  const golf = new Golf({
    Title: req.body.Title,
    Latitude:req.body.Latitude,
    Longitude:req.body.Longitude,
    Description: req.body.Description,
    id_Manager: req.body.id_Manager
  });

  /*if (err) {
    res.send(err);
  } else {*/
  golf
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
  Golf.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Golfs"
      });
    });
};


exports.findById = (req, res) => {
  Golf.findById(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Golfs"
      });
    });
};


exports.findByIdAndUpdate = (req, res) => {
  Golf.findOneAndUpdate(req.body.id, req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Golfs"
      });
    });
};





//params c'est les valeurs dans l'url
exports.findByIdAndRemove= (req, res) => {
  Golf.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Golfs"
      });
    });
};



exports.removeALL= (req, res) => {
  Golf.remove()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Golfs"
      });
    });
};
//}
