(function () {
    'use strict';

    angular.module('app.components.products-page')

    .directive('productsPage', function () {
            return {
                restrict: 'E',
                templateUrl: 'asset/js/components/products-page/products-page.html',
                scope: {},
                controller: "@",
                name: "controllerName",
                controllerAs: 'vm'
            }
        });
})();
