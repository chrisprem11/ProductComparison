(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product', ['ui.bootstrap'])
      .config(routeConfig);

    /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('product', {
          url: '/compare/mobile',
          templateUrl: 'app/pages/product/View/mobileComparison.html',
          title: 'Product Comparison',
          controller : 'ProductController',
          directive: 'productDirective',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 800
          }
        });
  }

})();
