(function () {
  'use strict';

  var layer = new L.StamenTileLayer("toner");
  var map = new L.Map("venues-map", {
    center: new L.LatLng(61.688727, 27.272146),
    zoom: 14,
    closePopupOnClick: false
  });

  var hacklabPopup = L.popup()
    .setLatLng([61.693483, 27.261691])
    .setContent("<b>Hacklab Mikkeli Ry</b><br>Pietarinkatu 23 e 22 50100 Mikkeli")
    .addTo(map);
  
  var tyottomatPopup = L.popup()
    .setLatLng([61.683301, 27.271751])
    .setContent("<b>Mikkelin Työttömät ry</b><br>Porrassalmenkatu 1, 50100 Mikkeli")
    .addTo(map);

  map.addLayer(layer);

})();