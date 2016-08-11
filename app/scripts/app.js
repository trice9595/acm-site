'use strict';

/**
 * @ngdoc overview
 * @name acmSiteApp
 * @description
 * # acmSiteApp
 *
 * Main module of the application.
 */
angular
  .module('acmSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state("main", {
      url: "/main",
      templateUrl: "views/main.html"
    });

    $stateProvider.state("events", {
      url: "/events",
      templateUrl: "views/events.html",
      controller: "EventsCtrl",
    });

    $stateProvider.state("team", {
      url: "/team",
      templateUrl: "views/team.html"
    });

    $stateProvider.state("committees", {
      url: "/committees",
      templateUrl: "views/committees.html"
    });

    $stateProvider.state("csg", {
      url: "/committees/csg",
      templateUrl: "views/committees/csg.html",
      controller: "CsgCtrl"
    });

    $stateProvider.state("acmw", {
      url: "/committees/acm-w",
      templateUrl: "views/committees/acmw.html",
      controller: "AcmwCtrl"

    });
  });
