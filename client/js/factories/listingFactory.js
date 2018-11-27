angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/listings');
    },
    //Gets current user info from site page
    getUser: function() {
      return $http.get('/api/users/getCurrentUser');
    },
    findByEmail: function(email) {
      return $http.get('/api/users/'+ email);
    },
    signOut: function(){
      return $http.get('/logout');
    },

    update: function(id, listing){
      return $http.put('/api/listings/' + id, listing);
    },
    getBuildings: function() {
      return $http.get('/api/buildings');
    },

    getClasses: function() {
      return $http.get('/api/classes');
    },

    createProf: function(newProfessor) {
	     return $http.post('/api/listings', newProfessor);
      },
    createCourse: function(newCourse) {
       return $http.post('/api/classes', newCourse);
      },

    delete: function(id) {
      Listings.findById(id, function(err,listing){
        if(err) throw err;
        listing.remove(function(err){
          if (err) throw err;
        });
      });
      return $http.delete('/api/listings/' + id);
  },

  getCurrentUser:function() {
    return $htttp.get("/api/users/getCurrentUser")
  }
};

  return methods;
});
