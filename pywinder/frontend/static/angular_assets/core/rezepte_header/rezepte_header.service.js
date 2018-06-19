angular.
  module('core.rezepte_header').
  factory('RezepteHeaderService', ['$resource',
    function($resource) {
      return $resource('/api/v1/rezeptheader/\:id/',{id: "@id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);