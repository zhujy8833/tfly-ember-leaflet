/* jshint node: true */
'use strict';

module.exports = {
  name: 'ticketfly-ember-leaflet',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/leaflet/dist/leaflet-src.js');
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet.css');
    app.import(app.bowerDirectory + '/ember-leaflet/dist/ember-leaflet.js',{
      exports: {
        'ember-leaflet': 'default'
      }
    });
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/leaflet.css');
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/leaflet.markercluster-src.js', {
      exports: {
        'L': 'default'
      }
    });
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
  }
};
