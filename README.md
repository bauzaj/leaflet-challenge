Earthquake Mapper


This application uses Leaflet.js to create a map of earthquakes around the world, based on data from the United States Geological Survey (USGS).

Getting Started
To use this application, simply download the repository and open the index.html file in your web browser.

Usage

The map shows the location, depth, and magnitude of earthquakes that have occurred in the last month. The size of each marker on the map indicates the magnitude of the earthquake, while the color represents the depth of the earthquake:

Earthquakes less than 10 km deep are shown in light blue.
Earthquakes between 10 and 30 km deep are shown in medium blue.
Earthquakes between 30 and 50 km deep are shown in dark blue.
Earthquakes between 50 and 70 km deep are shown in purple.
Earthquakes between 70 and 90 km deep are shown in dark purple.
A legend at the bottom-right corner of the map shows the different depth ranges and their corresponding colors.

Clicking on a marker on the map displays a popup with information about the earthquake, including the location, time, and magnitude.

Dependencies
This application uses the following libraries:

Leaflet.js (https://leafletjs.com/)
d3.js (https://d3js.org/)
Data Source
The earthquake data is obtained from the USGS Earthquake Hazards Program (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson). This data is updated every minute and reflects all earthquakes with a magnitude of 2.5 or greater within the past month.
