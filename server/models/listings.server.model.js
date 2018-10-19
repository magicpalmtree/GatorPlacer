var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var buildingSchema = new Schema({
    //This is all for the buildings that will be selected by TAs/Professors
    name: {
        type: String, 
        required: true
      }, 
      code: {
        type: String, 
        required: true, 
        unique: true
      }, 
      address: String, 
      coordinates: {
        latitude: Number, 
        longitude: Number
      }
});
//Gonna try to implement some kind of roles situation here, will have to look for it elsewhere
//TODO: Look into doing enums for user schema, have a user either be a student or some type of admin?
var userSchema = new Schema({//Both of these will have to be compared with regex validation with the argument @(\w){0,10}(?:\.)?ufl\.edu
    username: {
        type: String,
        required: true,
        unique: true,
        match: "/@(\w){0,10}(?:\.)?ufl\.edu/g"//Valdiates that email is either a @<something>.ufl.edu or @ufl.edu email address

    },
    password: {type: String, required: true},
    name: {type: String, required:true},
    classes: {
        type: [classSchema],
        default: undefined
    },
});

var adminSchema = new Schema({
    username: {//Both of these will have to be compared with regex validation with the argument @(\w){0,10}(?:\.)?ufl\.edu
        type: String,
        required: true,
        unique: true,
        match: "/@(\w){0,10}(?:\.)?ufl\.edu/g"//Valdiates that email is either a @<something>.ufl.edu or @ufl.edu email address
    },
    password: {
        type: String,
        required: true,
    }
});

var courseTaught = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: ListingSchema,
        required: true
    },
    //Gonna have to figure a way to have recurring dates 
    day: {
        type:String
    }
})