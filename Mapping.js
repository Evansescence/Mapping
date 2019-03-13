var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"

d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

L.geoJSON(geojsonFeature).addTo(map);

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(someGeojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
