angular.
  module('core.mitarbeiter').
  factory('MitarbeiterService', ['$resource',
    function($resource) {
      return $resource('/api/v1/mitarbeiter/\:id/',{id: "@id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);