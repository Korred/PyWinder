angular.
  module('menu').
  component('menu', {
  	templateUrl: 'static/angular_assets/menu/menu.template.html',
  	controller: ['$scope', '$element', '$state', '$attrs', 'store',
  		function MenuController($scope, $element, $state, $attrs, store){

  			// add proper CSS classes
			//OLD $element.addClass('column is-three-quarters menu_form');
			$element.addClass('column is-11 menu_form');
			
			  var menu = this;
			  menu.version = "0.1.0"

  			// Currently logged in user information taken from store
  			menu.currentUser = store.get("currentUser");

			menu.logout = function(){
				store.remove('currentUser');
				store.remove('token');

				$state.go('login');
			}
  		}
  	]












  });