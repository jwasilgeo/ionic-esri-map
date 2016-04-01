angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('EsriCtrl', function(esriLoader, $ionicScrollDelegate) {
  var self = this;

  esriLoader.require(['esri/Map'], function(Map) {
    self.map = new Map({
      basemap: 'topo'
    });
  });
});
