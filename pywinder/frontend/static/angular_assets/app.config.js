angular.
  module('PyWinderApp').
  config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$resourceProvider', '$httpProvider', 'jwtOptionsProvider', 'jwtInterceptorProvider',
          function config($stateProvider, $urlRouterProvider, $locationProvider, $resourceProvider, $httpProvider, jwtOptionsProvider, jwtInterceptorProvider) {
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);
            $resourceProvider.defaults.stripTrailingSlashes = false;

           jwtInterceptorProvider.tokenGetter = function(store) {
             return store.get('token');
            };

            // if available - push authentification token with each request 
            $httpProvider.interceptors.push('jwtInterceptor');

            // definition of possible application states
            $stateProvider.
            state('menu', {
              abstract: true,
              template: '<menu></menu>',
              data: {requireLogin : false},
            }).
            state('menu.nav', {
              url: '/',
              template: '<main_nav></main_nav>',
              data: {requireLogin : true},
            });
          }]).
  run(['$rootScope', '$http', '$location', '$transitions', '$state', '$uiRouterGlobals', 'store', 'jwtHelper',
    function run($rootScope, $http, $location, $transitions, $state, $uiRouterGlobals, store, jwtHelper){
        /*
      // redirect to login page if not logged in and trying to access a restricted page
      $transitions.onSuccess({}, function($transitions){
        console.log("-------------TRANSITION-------------")
        var newToState = $transitions.$to();
        console.log("New State:",newToState, $uiRouterGlobals.params)
        var token = store.get('token');

        // user needs to login in case:
        // 1. no token is found in store
        // 2. has token but token is expired
        var needsLogin = newToState.data.requireLogin && !token
        if (token && !needsLogin){
          if (jwtHelper.isTokenExpired(token)){
            needsLogin = true;
          }
        }

        if (needsLogin){
          console.log("NEEDS LOGIN");
          $state.transitionTo('login');
          return;
        }

        console.log(newToState.name);
        // TODO: add time check
        if (newToState.name !== 'login' && newToState.name !== 'register'){

          var date = jwtHelper.getTokenExpirationDate(token);
          var refresher = new TokenRefreshService();
          refresher.token = token;
          refresher.$save().then(
            function(success_response){
                if (success_response.token){
                  store.set('token', success_response.token);
                  console.log("Token refreshed to:", store.get('token'));
                }
            }
            , function(error_response){}
        )
        }

        $state.go(newToState.name, $uiRouterGlobals.params);
        return;

      })
      */

    }
    ]);