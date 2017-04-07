/**
 * @author Prem Christopher
 * created on 03.04.2017
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.product')
        .factory("ProductService", ProductService);

    /** @ngInject */
    function ProductService($http, $q, $state, $timeout, $log) {

/*
        var productTypeDetails = function(productName) {
*/
            var productTypeDetails = function() {
            var deferred = $q.defer();
            $timeout(function() {
               /* $http.get('http://localhost:8080/productTOI/searchProductType/' + productName)*/
                 $http.get('app/pages/product/Json/data.json')
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {
                        console.log('cannot delete data');
                    });

            }, 1000);

            return deferred.promise;
        }

        var productTypeDetailById = function(id) {
            var deferred = $q.defer();
            $timeout(function() {

                $http.get('http://localhost:8080/productTOI/getProductDetails/' + id)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {
                        console.log('cannot delete data');
                    });

            }, 1000);

            return deferred.promise;
        }
        
       

        return {
            "getProductTypeDetails": productTypeDetails,
            "getProductTypeDetailsById": productTypeDetailById
          
        }
    }
})();