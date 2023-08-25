var myApp = angular.module("MyModule", [])
    .controller("MyController", function ($scope) {
        var arrEmp = [
            { FirstName: 'Sourav', LastName: 'Saha', Gender: 'Male' },
            { FirstName: 'Sudipa', LastName: 'Saha', Gender: 'Female' },
            { FirstName: 'Atanu', LastName: 'Das', Gender: 'Male' },
            { FirstName: 'Aloka', LastName: 'Saha', Gender: 'Female' }
        ]
        var countryArr = [
            {
                name: 'India',
                cities: [
                    { name: 'Kolkata' },
                    { name: 'Mumbai' },
                    { name: 'Delhi' }
                ]
            },
            {
                name: 'UK',
                cities: [
                    { name: 'London' },
                    { name: 'Manchester' },
                    { name: 'Bermingham' }
                ]
            }
        ]
        $scope.employees = arrEmp;
        $scope.countries=countryArr;
    })