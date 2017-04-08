(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .directive('productDirective', productDirective);


      function productDirective(){
        return {
              templateUrl:"app/pages/product/Template/compare.html",
              restrict : 'EA',
              replace:true,
              //  scope: {
              //    item : '=',
              //    name :'@',
              //    doAction : '&onSelection'
              // },
                controller:'directiveController',
              // link : function(scope, element, attrs){
              //              //Add event listener for 'click' event
              //              element.on('click', function(event) {
              //                      element.html('Thanks for buying this item.');
              //                      element.css({
              //                          color: 'green'
              //                      });
              //                });
              //     }
            }
      }
})();
