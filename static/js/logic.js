// Creating the map object
var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 3
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://opentopomap.org/about/">OpenTopoMap</a>'
  }).addTo(myMap);
  
  // Use this link to get the GeoJSON data.
  var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  // Define colors for the legend
  var colors = ["#66ccff", "#3399ff", "#0066cc", "#003d99", "#001a66"];
  
  // Define labels for the legend
  var labels = ["<10 km", "10-30 km", "30-50 km", "50-70 km", "70-90 km"];
  
  // Getting our GeoJSON data
  d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    var geojson = L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        // Determine color based on earthquake depth
        var depth = feature.geometry.coordinates[2];
        var color = "blue";
        if (depth < 10) {
          color = colors[0];
        } else if (depth < 30) {
          color = colors[1];
        } else if (depth < 50) {
          color = colors[2];
        } else if (depth < 70) {
          color = colors[3];
        } else if (depth < 90) {
          color = colors[4];
        }
        // Determine size based on earthquake magnitude
        var radius = feature.properties.mag * 5;
        return L.circleMarker(latlng, {
          radius: radius,
          fillColor: color,
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
      }
    }).addTo(myMap);
    
    // Add a color legend to the map
    var legend = L.control({position: "bottomright"});
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend");
      div.style.backgroundColor = "white";
      div.style.fontSize = "14px";
      var labelsHtml = ["<strong>Depth (km)</strong>"];
      for (var i = 0; i < colors.length; i++) {
        labelsHtml.push(
          '<i style="background:' + colors[i] + '"></i> ' +
          '<span style="color: ' + colors[i] + '">' + labels[i] + '</span>'
        );
      }
      div.innerHTML = labelsHtml.join("<br>");
      return div;
    };
    legend.addTo(myMap);
  });