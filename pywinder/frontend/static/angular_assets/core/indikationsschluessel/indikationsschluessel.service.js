angular.
  module('core.indikationsschluessel').
  factory('IndikationsschluesselService', ['$resource',
    function($resource) {
      return $resource('/api/v1/indikationsschluessel/\:id/',{id: "@id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);