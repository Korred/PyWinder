angular.
  module('core.tarifregionen').
  factory('TarifregionenService', ['$resource',
    function($resource) {
      return $resource('/api/v1/tarifregionen/\.:id',{id: "@id"});
    }
  ]);