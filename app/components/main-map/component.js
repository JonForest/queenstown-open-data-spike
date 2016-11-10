/* global L */
import Ember from 'ember';
import mapUtils from 'queenstown-open-data-spike/utils/map';

export default Ember.Component.extend({

  didInsertElement: function () {
    this._super();
    const mapElement = this.$('.editable-map').get(0);
    const queenstown = L.latLng(-45.03034747519841, 168.66519927978518);
    const map = L.map(mapElement, {
      center: queenstown,
      zoom: 10,
      maxZoom: 20
    });

    map.addLayer(mapUtils.getOpenStreetMap());
  }
});
