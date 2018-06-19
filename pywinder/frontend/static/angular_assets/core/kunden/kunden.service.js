angular.
  module('core.kunden').
  factory('KundenService', ['$resource',
    function($resource) {
      return $resource('/api/v1/kunden/\:id/',{id: "@id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);