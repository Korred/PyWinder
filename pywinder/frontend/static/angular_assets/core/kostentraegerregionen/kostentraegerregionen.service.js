angular.
  module('core.kostentraegerregionen').
  factory('KostentraegerregionenService', ['$resource',
    function($resource) {
      return $resource('/api/v1/kostentraegerregionen/\.:id',{id: "@id"});
    }
  ]);