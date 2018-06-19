angular.
  module('core.aerzte').
  factory('AerzteService', ['$resource',
    function($resource) {
      return $resource('/api/v1/aerzte/\:id/',{id: "@id", arzt_num: "@arzt_num"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);