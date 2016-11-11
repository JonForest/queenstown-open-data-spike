/* global L*/
const mapsBaseUrl = 'http://qldcmaps.qldc.govt.nz/arcgis/rest/services';

export default {
  getOpenStreetMap () {
    const osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    return new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 20, attribution: osmAttrib});
  },

  getDocTracks () {
    // http://qldcmaps.qldc.govt.nz/arcgis/rest/services/Land/MapServer
    // parcels on [1], labels on [0] - zoom levels need to be high
    // /Land/MapServer

    return L.esri.dynamicMapLayer({
      url: `${mapsBaseUrl}/DoC_Tracks/MapServer`,
      f: 'image',
      format: 'png32',
      layers: [0]
    });
  },

  // getBaseLayers () {
  //   const baseLayer = L.tileLayer(
  //     `${mapsBaseUrl}/Topo/MapServer/tile/{z}/{y}/{x}`,
  //     {
  //       'maxZoom': 13,
  //       'attribution': '',
  //       'minZoom': 0,
  //       'continuousWorld': true
  //     }
  //   )
  //   const lowResLayer = L.tileLayer(
  //     `${mapsBaseUrl}/Cache/LowResolutionAerialPhotos/MapServer/tile/{z}/{y}/{x}`,
  //     {
  //       'maxZoom': 3,
  //       'attribution': '',
  //       'minZoom': 0,
  //       'continuousWorld': true
  //     }
  //   )
  //   const highResLayer = L.tileLayer(
  //     `${mapsBaseUrl}/Cache/HighResolutionAerialPhotos/MapServer/tile/{z}/{y}/{x}`,
  //     {
  //       'maxZoom': 13,
  //       'attribution': 'Marlborough District Council',
  //       'minZoom': 7,
  //       'continuousWorld': true
  //     }
  //   )
  //
  //   return L.layerGroup([baseLayer])
  // },

  // getCrs () {
  //   return new L.Proj.CRS('EPSG:2193', // http://epsg.io/2193
  //     '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 ' +
  //     '+ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  //     {
  //       origin: [-4020900, 19998100],
  //       resolutions: [
  //         396.87579375158754,
  //         264.5838625010584,
  //         132.2919312505292,
  //         66.1459656252646,
  //         33.0729828126323,
  //         26.458386250105836,
  //         13.229193125052918,
  //         6.614596562526459,
  //         2.6458386250105836,
  //         1.3229193125052918,
  //         0.6614596562526459,
  //         0.26458386250105836,
  //         0.13229193125052918,
  //         0.06614596562526459,
  //         0.033072982812632296
  //       ]
  //     }
  //   )
  // },
};


// Notes:
// Tiles for area photos: http://qldcmaps.qldc.govt.nz/arcgis/rest/services/Aerial_Photos_2015/MapServer
// Doc_Tracks http://qldcmaps.qldc.govt.nz/arcgis/rest/services/DoC_Tracks/MapServer
