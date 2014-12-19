
var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.tasks = [
    ]

    $scope.editorEnabled = false;

    $scope.addTask = function(){
        $scope.tasks.push({text:$scope.formTaskText});
        $scope.formTaskText="";
    }

    $scope.enableEditor = function (task, hashKey, sourceArray) {
        $scope.editorEnabled = true;
        $scope.formTaskText = task
        angular.forEach(sourceArray, function (obj, index) {
            if (obj.$$hashKey === hashKey) {
                sourceArray.splice(index, 1);
                return;
            };
        })
        
    }

    $scope.disableEditor = function () {
        $scope.editorEnabled = false;
    }

    $scope.editTask = function (hashKey, sourceArray) {
        $scope.tasks.push({ text: $scope.formTaskText });
        $scope.formTaskText = "";
        $scope.editorEnabled = false;
       
    }
        
    $scope.deleteTask = function (hashKey, sourceArray) {
         angular.forEach(sourceArray, function (obj, index) {
             if (obj.$$hashKey === hashKey) {
              sourceArray.splice(index, 1);
              return;
                };
        })
    }

}]);