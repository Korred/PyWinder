angular.
  module('core.username').
  factory('UsernameService', ['$resource',
    function($resource) {
        var r = $resource('/api/v1/username/:username/\.',{username: "@username"});
    	delete r.prototype.$set;
    	delete r.prototype.$query;
  		delete r.prototype.$delete;
  		delete r.prototype.$remove;
      	return r
    }
  ]);
