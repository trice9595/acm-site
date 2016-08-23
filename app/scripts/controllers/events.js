'use strict';

/**
 * @ngdoc function
 * @name acmSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmSiteApp
 */
angular.module('acmSiteApp')
  .controller('EventsCtrl', function ($scope) {

    $scope.calendar = [
      {
        year: "2016",
        months: [
          {
            month: "August",
            events: [
              {
                date: "31st",
                time: "TBD",
                location: "TBD",
                name: "Career Fair Prep #1 – Workshop: Finding an Internship or Job",
              }
            ]
          },
          {
            month: "September",
            events: [
              {
                date: "1st",
                time: "TBD",
                location: "TBD",
                name: "Boeing Mentorship applications due, pick-up in EME 202H"
              },
              {
                date: "7th",
                time: "TBD",
                location: "TBD",
                name: "Career Fair Prep #2 - Workshop: Information Interviews / Career Fair Introduction"
              },
              {
                date: "14th",
                time: "4-5PM",
                location: "TBD",
                name: "Career Fair Prep #3 - Workshop: Build your Resume"
              },
              {
                date: "20-21st",
                time: "",
                location: "",
                name: "Walt Disney Co. @ WSU (Recruiting for all majors)"
              },
              {
                date: "20th",
                time: "4PM",
                location: "Honors Hall",
                name: "Open Presentation: Matt Estes, Executive Director of Disney Enterprise Architecture"
              },
              {
                date: "21st",
                time: "9-12PM",
                location: "TBD",
                name: "Meet with Matt, drop-in and visit with Matt about jobs and internship"
              },
              {
                date: "21st",
                time: "TBD",
                location: "TBD",
                name: "Career Fair Prep #4 - Workshop: Networking/Social Media"
              }
            ]
          },
          {
            month: "October",
            events: [
              {
                date: "3rd",
                time: "4-5PM",
                location: "TBD",
                name: "Microsoft Tech Talk & Coding Competition"
              },
              {
                date: "3rd",
                time: "5-6PM",
                location: "TBD",
                name: "EMC Isilon Tech Talk"
              },
              {
                date: "3rd",
                time: "TBD",
                location: "TBD",
                name: "SWE Evening with Industry Networking Event"
              },
              {
                date: "4th",
                time: "TBD",
                location: "TBD",
                name: "Career Expo and VCEA Technical Fair"
              },
              {
                date: "4th",
                time: "TBD",
                location: "TBD",
                name: "NAVAIR Information Session"
              },
            ]
          },
          {
            month: "November",
            events: [
              {
                date: "21st",
                time: "",
                location: "Seattle",
                name: "Industry Tour"
              },
            ]
          },
        ]
      }
    ]

  });
