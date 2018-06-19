angular.
  module('core.patienten').
  factory('PatientenService', ['$resource',
    function($resource) {
      return $resource('/api/v1/patienten/\:id/',{id: "@id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);