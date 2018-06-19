angular.
  module('core.kostentraeger').
  factory('KostentraegerService', ['$resource',
    function($resource) {
      return $resource('/api/v1/kostentraeger/\:id/',{id: "@id", kt_typ: "@kt_typ", ik_num: "@ik_num"});
    }
  ]);