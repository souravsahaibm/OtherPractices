var myApp = angular.module("FilterModule", [])
    .filter("customFilter", function () { 
        // Custom Filer can be created by filter() which has a function will return another anonymous function
        return function (Gender) {
            switch (Gender) {
                case 1:
                    return 'Male';
                case 2:
                    return 'Female';
            }
        }
    })
    .controller("FilterController", function ($scope) {
        var empArr = [
            { Name: 'Sourav', DOB: new Date('September 05,1990'), Gender: 1, Salary: 45000.788 },
            { Name: 'Sudipa', DOB: new Date('October 31,1996'), Gender: 2, Salary: 25000 },
            { Name: 'Atanu', DOB: new Date('August 15,1988'), Gender: 1, Salary: 30000.287 },
            { Name: 'Suparna', DOB: new Date('April 01,1984'), Gender: 2, Salary: 50000 }
        ];
        $scope.employees = empArr;
        $scope.rowLimit = 3;
        $scope.sortColumn = 'Name';
        $scope.reverseSort = false;
        $scope.headers = Object.keys($scope.employees[0]);

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column)
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            return '';
        }

        $scope.search = function (item) {
            if ($scope.searchText == undefined)
                return true;
            else {
                if ((item.Name.toLowerCase.indexOf($scope.searchText.toLowerCase()) != -1) ||
                    (item.Gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)) {
                    return true;
                }
            }
            return false;
        }
        $scope.checked = 0;

        $scope.hide = function (item) {
            if (!$scope.checked)
                return true;
            else if ($scope.checked && item.Name.toLowerCase().indexOf('sourav') != -1) {
                return item.Name.toLowerCase().indexOf('sourav').visible = false;
            }
            return true;           
        }
    })