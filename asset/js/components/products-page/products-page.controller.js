(function () {
    'use strict';

    angular.module('app.components.products-page')
        .controller('productsPageController', productsPageController);

    productsPageController.$inject = ['productsPageService'];

    function productsPageController(productsPageService) {

        var vm = this;
        vm.products = [];
        
        vm.filterFn = filterFn;
        
        vm.filterSize = null;

        activate();

        function activate() {
            productsPageService.getProducts().then(
	            function(data){
		            vm.products = data;
	            }
            )
        }
        
        function filterFn(value) {
	        if(vm.filterSize){
		        var returnVal = false;
			    value.size.forEach(function(e){
				    if(e===vm.filterSize) {
					    returnVal = true;
				    }
			    });
			    return returnVal;
	        } else {
		        return true;
	        }
		}
        
    }
})();
