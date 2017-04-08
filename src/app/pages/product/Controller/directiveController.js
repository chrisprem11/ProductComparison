(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .controller('directiveController', directiveController);


      function directiveController($scope){
        $scope.msg = "Hello";

        $scope.doAction=function($item, $model, $label){
          console.log($item);
        }
      }
})();
