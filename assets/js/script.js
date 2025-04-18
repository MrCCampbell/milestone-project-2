

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
  "marker"
  );
  const map = new google.maps.Map(document.getElementById("cambodia-map"), {
  zoom: 7,
  center: {
  lat: 12.6940934,
  lng: 104.9103991,
  },
  mapId: "cambodia-map",
  });
  
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  var locations = [
  { lat: 10.943501, lng: 103.273978 },
  { lat: 12.198961, lng: 106.378396 },
  { lat: 14.342588, lng: 103.628196 },
  ];
  
  const markers = locations.map((position, i) => {
  const label = labels[i % labels.length];
  const pinGlyph = new google.maps.marker.PinElement({
  glyph: label,
  glyphColor: "white",
  });
  const marker = new google.maps.marker.AdvancedMarkerElement({
  position,
  content: pinGlyph.element,
  });
  
  // markers can only be keyboard focusable when they have click listeners
  // open info window when marker is clicked
  marker.addListener("click", () => {
  infoWindow.setContent(position.lat + ", " + position.lng);
  infoWindow.open(map, marker);
  });
  return marker;
  });
  
  new markerClusterer.MarkerClusterer({ markers, map });
  }
  
  initMap();

  