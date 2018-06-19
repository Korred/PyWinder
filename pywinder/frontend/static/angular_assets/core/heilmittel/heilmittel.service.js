angular.
  module('core.heilmittel').
  factory('HeilmittelService', ['$resource',
    function($resource) {
      return $resource('/api/v1/heilmittel/\:id/',{id: "@id", id_key: "@id_key", patient_id: "@patient_id"},
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);