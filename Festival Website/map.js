const map = L.map('map'); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
 
  // Specify the maximum zoom of the map 
  maxZoom: 19, 
 
  // Set the attribution for OpenStreetMaps 
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 
 
// Set the view of the map 
// with the latitude, longitude and the zoom value 
map.setView([43.766159, -79.414549], 16); 

// Show a market at the position of the Eiffel Tower 
let torontoArtsCenter = L.marker([43.766159, -79.414549,]).addTo(map); 
 
// Bind popup to the marker with a popup 
torontoArtsCenter.bindPopup("Toronto Center for the Arts").openPopup(); 