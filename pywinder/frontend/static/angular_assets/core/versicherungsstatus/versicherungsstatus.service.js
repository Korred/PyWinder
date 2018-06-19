angular.
  module('core.versicherungsstatus').
  factory('VersicherungsStatusService', ['$resource',
    function($resource) {
      return $resource('/api/v1/versicherungsstatus/\.:id',{id: "@id", bundesland: "@bundesland"});
    }
  ]);