angular.
  module('core.login').
  factory('LoginService', ['$resource', '$http',
    function($resource, $http) {
      var r = $resource('/api/v1/login/\.');
        delete r.prototype.$query;
        delete r.prototype.$delete;
        delete r.prototype.$remove;
      return r;




        }])