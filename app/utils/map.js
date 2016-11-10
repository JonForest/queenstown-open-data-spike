/* global L*/
const mapsBaseUrl = 'http://qldcmaps.qldc.govt.nz/arcgis/rest/services';

export default {
  getOpenStreetMap () {
    const osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    return new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 20, attribution: osmAttrib});
  },
};
