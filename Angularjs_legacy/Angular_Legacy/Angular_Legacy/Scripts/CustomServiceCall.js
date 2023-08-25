/// <reference path="angular.min.js" />

var myApp = angular.module('CustomModule', [])
    .controller('CustomController', function ($scope, StringProcessServ) {

        $scope.processMethod = function (input) {
            
            $scope.output = StringProcessServ.processString(input);
        }
    });