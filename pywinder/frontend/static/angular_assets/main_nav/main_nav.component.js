angular.
  module('mainNav').
  component('mainNav', {
  	templateUrl: 'static/angular_assets/main_nav/main_nav.template.html',
  	controller: ['$scope', '$element', '$state', '$attrs', 'store',
  		function MainMenuController($scope, $element, $state, $attrs, store){

  			// add proper CSS classes

			var mnav = this;
			  


			mnav.addNewPosition = function() {
				var newNo = mnav.positions.length+1;
				mnav.positions.push({id: newNo, angle: null, feedrate: null, passes: null, len: null, reps: 1});
			};
					
			mnav.removePosition = function(pos) {
				var to_delete = 0			
				for (var i = 0; i < rac.positions.length; i++){
					if (rac.positions[i].id == pos){
						to_delete = i
					}
				}
				mnav.positions.splice(to_delete, 1);
			};



			// INIT
			mnav.positions = [{id: 1, angle: null, feedrate: null, passes: null, len: null, reps: 1}];

  		}
  	]












  });