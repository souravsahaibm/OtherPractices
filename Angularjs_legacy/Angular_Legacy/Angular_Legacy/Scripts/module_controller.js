// var myApp = angular.module("MyModule", []); //Module creation
// var myController = function ($scope) {      //Controller creation
//     var employee = {
//         FirstName: 'Sourav',
//         LastName: 'Saha',
//         Age: 30,
//         Gender: 'Male'
//     }
//     $scope.message = "My First Angular App";
//     $scope.employee = employee;
// }
//Registering controller to module
// myApp.controller("firstController", myController);

// BY using method chaining mechanism we can create module, controller and register controller with module in one line

var myApp = angular.module("MyModule", [])
    .controller("firstController", function ($scope) {      //Controller creation

        var employee = {
            FirstName: 'Sourav',
            LastName: 'Saha',
            Age: 30,
            Gender: 'Male',
            MyImg:'Images/PIC 2.jpg'
        }
        $scope.message = "My First Angular App";
        $scope.employee = employee;
    })