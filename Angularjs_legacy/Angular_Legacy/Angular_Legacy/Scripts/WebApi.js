/// <reference path="angular.min.js" />

var empdata = angular.module('EmpData', [])
    .controller('EmpController', function ($scope, $http,$log) {
        $http(
            {
                method: 'GET',
                url: 'https://localhost:44373/api/emplist'
            }).then(function (response) {
                $scope.emplist = response.data;
            });
        //$http.get('https://localhost:44373/api/emplist').then(function (response) {
        //    $scope.emplist = response.data;
        console.log($scope.emplist);
        $log.info(response);
        //})
    });