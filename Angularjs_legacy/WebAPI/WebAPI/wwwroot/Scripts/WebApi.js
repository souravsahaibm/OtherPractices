
/// <reference path="angular.js" />
var empdata = angular.module('EmpData', [])
    .controller('EmpController', function ($scope, $http, $log) {
        $scope.Test = 'This is a Test Message';
        $http(
            {
                method: 'GET',
                url: 'https://localhost:44373/api/emplist'
            }).then(function (response) {
                $scope.emplist = response.data;
                $log.info(response);
            }, function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });
    });

//$http.get('https://localhost:44373/api/emplist').then(function (response) {
        //    $scope.emplist = response.data;