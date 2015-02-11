/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  
  afterInstall: function() {
    this.addBowerPackageToProject('leaflet', '~0.7.3');
    this.addBowerPackageToProject('ember-leaflet', '~0.6.1');
  }
};

