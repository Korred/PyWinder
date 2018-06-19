angular.
  module('core.verbaende').
  factory('VerbaendeService', ['$resource',
    function($resource) {
      return $resource('/api/v1/verbaende/\.:id',{id: "@id"});
    }
  ]);
