'use strict';

/**
 * @ngdoc function
 * @name acmSiteApp.controller:CsgCtrl
 * @description
 * # MainCtrl
 * Controller of the acmSiteApp
 */
angular.module('acmSiteApp')
  .controller('CsgCtrl', function ($scope) {
    $scope.pageColor = "acm-red";

    $scope.workshops = [
      {
        name: "First Meeting of the Year",
        date: "TBA",
        time: "TBA",
        location: "Sloan 169",
        description: "We will be introducing our plans for the year as well as gauging interest in the talks and worskhops for the upcoming year."
      }
    ]
  });
