
/* Dependencies */
var mongoose = require('mongoose'), 
    Class = require('../models/class.js');

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var newClass = new Class(req.body);


  /* Then save the listing */
  newClass.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(classes);
    }
  });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Class.find({}, function(err,classes) {
    if(err) throw err;
    res.json(classes);
  })
};


/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Class.findById(id).exec(function(err, classes) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};