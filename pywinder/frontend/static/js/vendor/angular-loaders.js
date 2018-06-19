(function () {

	'use strict';

	angular
		.module("angular-loaders", [] )
		.directive('loaderCss', loader); 

	function loader() {

		var loaders = {
		  "ball-pulse"                  : 3,
		  "ball-grid-pulse"             : 9,
		  "ball-clip-rotate"            : 1,
		  "ball-clip-rotate-pulse"      : 2,
		  "square-spin"                 : 1,
		  "ball-clip-rotate-multiple"   : 2,
		  "ball-pulse-rise"             : 5,
		  "ball-rotate"                 : 1,
		  "cube-transition"             : 2,
		  "ball-zig-zag"                : 2,
		  "ball-zig-zag-deflect"        : 2,
		  "ball-triangle-path"          : 3,
		  "ball-scale"                  : 1,
		  "line-scale"                  : 5,
		  "line-scale-party"            : 4,
		  "ball-scale-multiple"         : 3,
		  "ball-pulse-sync"             : 3,
		  "ball-beat"                   : 3,
		  "line-scale-pulse-out"        : 5,
		  "line-scale-pulse-out-rapid"  : 5,
		  "ball-scale-ripple"           : 1,
		  "ball-scale-ripple-multiple"  : 3,
		  "ball-spin-fade-loader"       : 8,
		  "line-spin-fade-loader"       : 8,
		  "triangle-skew-spin"          : 1,
		  "pacman"                      : 5,
		  "ball-grid-beat"              : 9,
		  "semi-circle-spin"            : 1
		};

		return {

			restrict: 'A',

			replace: true,

			scope: { },

			template: function(elem, attr) {
				return '<div class="ng-loaders"><div class="loader-inner  {{loader}}"><div ng-repeat="node in nodes" class="{{loaderClass}}"></div></div></div>';
			},

			link: function(scope, elem, attr) {		
				attr.$observe('loaderCss', init);

				init();

				function init() {
					scope.nodes = [];
					scope.loader = attr.loaderCss;
					//scope.loaderClass = attr.loaderCssClass;
					scope.loaderClass = 'angular-loader'
					for ( var i = 0 ; i < loaders[ scope.loader ] ; i++ ) {
						scope.nodes.push(i);
					}	
					return true;
				}

			}

		};
	}

})();