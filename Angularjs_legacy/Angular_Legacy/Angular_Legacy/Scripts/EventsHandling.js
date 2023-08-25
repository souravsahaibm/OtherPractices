var myApp = angular.module("EventModule", [])
    .controller("EventController", function ($scope) {
        var techArr = [
            { Name: 'C#', Like: 0, DisLike: 0 },
            { Name: 'Java', Like: 0, DisLike: 0 },
            { Name: 'Python', Like: 0, DisLike: 0 },
            { Name: 'Azure', Like: 0, DisLike: 0 },
        ]
        $scope.technologies = techArr;

        $scope.LikeIncrement = function (technogy) {
            technogy.Like++;
        }
        $scope.DisLikeIncrement = function (technogy) {
            technogy.DisLike++;
        }
    })