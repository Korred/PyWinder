  angular.
  module('core.leistungserbringer').
  factory('LeistungserbringerService', ['$resource',
    function($resource) {
      return $resource('/api/v1/leistungserbringer/\.:id',{id: "@id"});
    }
  ]);