"use strict";

angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';

        $scope.sortBy = function(colName) {
            $scope.sortCol = colName;
        }

        $scope.isSortedBy = function(colName) {
            return $scope.sortCol == colName;
        }
    });