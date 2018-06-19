angular.
  module('core.verordnungsart').
  factory('VerordnungsartService', ['$resource',
    function($resource) {
      return $resource('/api/v1/verordnungsart/\.:id',{id: "@id"});
    }
  ]);