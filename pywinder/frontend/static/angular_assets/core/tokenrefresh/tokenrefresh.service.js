angular.
  module('core.tokenrefresh').
  factory('TokenRefreshService', ['$resource',
    function($resource) {
    	var r = $resource('/api/v1/token-refresh/\.');
      delete r.prototype.$get;
      delete r.prototype.$query;
      delete r.prototype.$delete;
      delete r.prototype.$remove;
      return r
    }
  ]);
