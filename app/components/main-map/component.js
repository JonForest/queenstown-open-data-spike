/* global L */
import Ember from 'ember';
import mapUtils from 'queenstown-open-data-spike/utils/map';

export default Ember.Component.extend({

  didInsertElement: function () {
    this._super();
    const mapElement = this.$('.editable-map').get(0);
    const queenstown = L.latLng(-45.03034747519841, 168.66519927978518);
    // set(this, 'currentLocation', L.latLng(-41.5134, 173.9612));  // Blenheim
    const map = L.map(mapElement, {
      center: queenstown,
      zoom: 13,
      // crs: mapUtils.getCrs(),
    });

      // mapUtils.getBaseLayers().addTo(map);
      mapUtils.getDocTracks().addTo(map);

    map.addLayer(mapUtils.getOpenStreetMap());
  }
});
