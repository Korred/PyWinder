angular.
  module('core.kostentraegertyp').
  factory('KostentraegertypService', ['$resource',
    function($resource) {
      return $resource('/api/v1/kostentraegertypen/\.:id',{id: "@id"});
    }
  ]);