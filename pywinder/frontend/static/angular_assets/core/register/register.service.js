angular.
  module('core.register').
  factory('RegisterService', ['$resource',
    function($resource) {
    	var r = $resource('/api/v1/register/\.');
    	delete r.prototype.$get;
    	delete r.prototype.$query;
  		delete r.prototype.$delete;
  		delete r.prototype.$remove;
      return r
    }
  ]);
