'use strict';

angular.module('ledExample', [])
  .controller('ledController', ['$scope', function ($scope) {

    $scope.stateModel = [{
      label: 'on',
      value: 'on'
    }, {
      label: 'off',
      value: 'off'
    }];

    $scope.state = $scope.stateModel[1];

    $scope.toggle = function () {
      var state = $scope.state;
      if (state.value !== 'on') {
        $scope.state = $scope.stateModel[0];
      } else {
        $scope.state = $scope.stateModel[1];
      }
    };
  }]);
