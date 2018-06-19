angular.
  module('core.password').
  factory('ChangePasswordService', ['$resource',
    function($resource) {
      return $resource('/api/v1/changepassword/',
      {
        'update': { method:'PUT' }
      }
    );
    }
  ]);