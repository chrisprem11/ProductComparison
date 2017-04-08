/**
* @author Prem Christopher
 * created on 03.04.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController($scope,ProductService) {
    $scope.showFeatures = false;
    $scope.showImage= false;
    $scope.showSecondDiv=false;
    $scope.showThirdDiv=false;

    $scope.showInputTextBox = true;
    $scope.showSecondInputTextBox =true;
    $scope.showThirdInputTextBox = true;
    $scope.mobileNames = [];
    $scope.smartTablePageSize = 5;

    $scope.matchedAttributes =[];

/*New directive trials*/


/**/
      $scope.features = { "Display":"Display", "Camera":"Camera", "OS":"OS","Sim":"Sim","InternalStorage":"Internal Storage",
      "EternalStorage":"External Storage" };

      $scope.showOptions = function(){
                ProductService.getProductTypeDetails().then(function(arg){
                $scope.mobileNamess = arg;
            });
      }

      $scope.onSelect = function ($item, $model, $label) {
            /*$scope.showInputTextBox = false;*/
            $scope.showImage= true;
            $scope.showFeatures=true;
            $scope.selected = $item;
            console.log($scope.selected);
            var id = $scope.selected.productTypeId;
            ProductService.getProductTypeDetailsById().then(function(arg){
              $scope.mobileAttributes =arg;
              console.log($scope.mobileAttributes);
            });
       };

      $scope.onSecondSelect = function ($item, $model, $label) {
            $scope.showSecondInputTextBox = false;
            $scope.showSecondDiv= true;
            $scope.secondSelectedItem = $item;
            var id = $scope.secondSelectedItem.productTypeId;
            ProductService.getProductTypeDetailsById(id).then(function(arg){
              $scope.secondMobileAttributes =arg;
              console.log($scope.secondMobileAttributes);
            });
       };

       $scope.onThirdSelect = function ($item, $model, $label) {
            $scope.showThirdInputTextBox = false;
            $scope.showThirdDiv= true;
            $scope.thirdSelectedItem = $item;
            var id = $scope.thirdSelectedItem.productTypeId;
            ProductService.getProductTypeDetailsById(id).then(function(arg){
              $scope.thirdMobileAttributes =arg;
              console.log($scope.thirdMobileAttributes);
            });
       };

      $scope.hideData= function(){
          $scope.showInputTextBox = true;
          $scope.showImage= false;
          $scope.selected = "";
          $scope.mobileAttributes="";
          $scope.mobileOne="";
      }

      $scope.hideSecondData = function(){
            $scope.showSecondDiv=false;
            $scope.secondSelectedItem="";
            $scope.secondMobileAttributes="";
            $scope.showSecondInputTextBox=true;
            $scope.mobileTwo="";

      }

      $scope.hideThirdData = function(){
            $scope.showThirdDiv=false;
            $scope.thirdSelectedItem="";
            $scope.thirdMobileAttributes="";
            $scope.showThirdInputTextBox=true;
            $scope.mobileThree="";

      }

       /* $scope.display = function(){
            $scope.showFeatures=true;
             if(!($scope.mobileOne).isUndefined){
                ProductService.getProductTypeDetails($scope.mobileOne).then(function(arg){
                    $scope.mobileName =arg;
                    var pId=($scope.mobileName[0].productTypeId);
                    console.log(pId);
                ProductService.getProductTypeDetailsById(pId).then(function(arg){
                    $scope.mobileAttributes =arg;
                    console.log($scope.mobileAttributes);
                });
            });
         }
        }

        $scope.displayTwo = function(){
            $scope.showFeatures=true;
             if(!($scope.mobileTwo).isUndefined){
                ProductService.getProductTypeDetails($scope.mobileTwo).then(function(arg){
                    $scope.secondMobileName =arg;
                    var pId=($scope.secondMobileName[0].productTypeId);
                    console.log(pId);
                ProductService.getProductTypeDetailsById(pId).then(function(arg){
                    $scope.secondMobileAttributes =arg;
                    console.log($scope.secondMobileAttributes);
                });
            });
         }
        }

         $scope.displayThree = function(){
            $scope.showFeatures=true;
             if(!($scope.mobileThree).isUndefined){
                ProductService.getProductTypeDetails($scope.mobileThree).then(function(arg){
                    $scope.thirdMobileName =arg;
                    var pId=($scope.thirdMobileName[0].productTypeId);
                    console.log(pId);
                ProductService.getProductTypeDetailsById(pId).then(function(arg){
                    $scope.thirdMobileAttributes =arg;
                    console.log($scope.secondMobileAttributes);
                });
            });
         }
        }

         //THIS function CAN BE USED TO SEARCH A PRODUCT BY ITS NAME
      /*  $scope.searchPhone = function(obj){
          var product = obj;
          ProductService.getProductTypeDetails(product).then(function(arg){
              $scope.mobileNames.push(arg);
              console.log($scope.mobileNames);
              for(var i in $scope.mobileNames){
                    $scope.products.push($scope.mobileNames[i].productDisplayName);
              }
            });
      }

      $scope.compareProduct = function(id){
          $scope.showFeatures = true;
          ProductService.getProductTypeDetailsById(id).then(function(arg){
              $scope.mobileAttributes =arg;
              console.log($scope.mobileAttributes);
            });
      }*/
  }

})();
