/* const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var Produit = require('./models/Produit');
var Commande = require('./models/Commande');
const app = express();
var mongoose =require('mongoose');

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const  db = "mongodb://localhost/test";
mongoose.connect(db ,{ useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 app.post("/createpdt", (req, res) => {
    // Validate request
    if (!req.body. Nompd) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a PRODUCT
    const Produit = new Produit({
      Name: req.body. Name,
      Prix: req.body.Prix,
      Quantité: req.body.Quantité,
    });
  
    // Save PRODUCT in the database
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
  });
  app.get("/findallpdt", (req, res) => {
    const  Name = req.query.Name;
    var condition =  Name ? {  Name: { $regex: new RegExp(Name), $options: "i" } } : {};
  
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
  });
  app.post("/updatepdt", (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Produit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  });
  app.post("/deletepdt", (req, res) => {
    const id = req.params.id;
  
    Produit.findByIdAndRemove(id)
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
  });

  // CRUD COMMAND
  app.post("/createCmd", (req, res) => {
    // Validate request
    if (!req.body. Nompd) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a COMMAND
    const Commande= new Commande({
        dateCmd:Produit.dateCmd,
        PrixTotCmd:Produit.PrixTotCmd,
       MontantCmdligne: Produit.MontantCmdligne
    });
  
    // Save COMMAND in the database
    Commande
      .save(Commande)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  });
  app.post("/findallCmd", (req, res) => {
    const   dateCmd = req.query. Nompd;
    var condition =   dateCmd ? {   dateCmd: { $regex: new RegExp(  dateCmd), $options: "i" } } : {};
  
    Commande.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      });
  });
  app.post("/updateCmd", (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Commande.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update command with id=${id}. Maybe command was not found!`
          });
        } else res.send({ message: "command was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating command with id=" + id
        });
      });
  });
  app.post("/deleteCmd", (req, res) => {
    const id = req.params.id;
  
    Commande.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete command with id=${id}. Maybe command was not found!`
          });
        } else {
          res.send({
            message: "command was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete command with id=" + id
        });
      });
  }); */
  const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var produitController = require('./controllers/produit.controller.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/produits', produitController);