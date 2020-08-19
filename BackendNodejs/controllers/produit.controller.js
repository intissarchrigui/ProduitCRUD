/* exports.create = (req, res) => {
    // Validate request
    if (!req.body. Nompd) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const Produit = new Produit({
      Name: req.body. Name,
      Prix: req.body.Prix,
      Quantité: req.body.Quantité,
    });
  
    // Save Tutorial in the database
    Produit
      .save(Produit)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
  exports.findAll = (req, res) => {
    const Name = req.query. Nompd;
    var condition =  Name ? {  Name: { $regex: new RegExp( Name), $options: "i" } } : {};
  
    Produit.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  };
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update product with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "product was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating product with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete product with id=${id}. Maybe product was not found!`
          });
        } else {
          res.send({
            message: "product was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product with id=" + id
        });
      });
  }; */
  const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Produit } = require('../models/produit');

// => localhost:3000/employees/
router.get('/', (req, res) => {
  Produit.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Produit.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var pdt = new Produit ({
        name: req.body.name,
       Prix: req.body.Prix,
       Quantite: req.body.Quantite,
       
    });
    pdt.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var pdt = {
        name: req.body.name,
        Prix: req.body.Prix,
        Quantite: req.body.Quantite
       
    };
    Produit.findByIdAndUpdate(req.params.id, { $set: pdt }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Produit.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;