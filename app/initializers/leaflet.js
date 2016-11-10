/* global L*/
// Need to import this to get access to L on the global name space.
import {} from 'npm:proj4leaflet';
import esri from 'npm:esri-leaflet';
import {} from 'npm:leaflet-draw';


export function initialize (/* container, application */) {
  L.esri = esri;
}

export default {
  name: 'leaflet-initializer',
  initialize: initialize
};
