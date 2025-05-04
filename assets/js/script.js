// map
let map;
async function initMap() {
  const apiKey = 'AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc'; 
  const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
  "marker"
  );
  map = new google.maps.Map(document.getElementById("cambodia-map"), {
  zoom: 7,
  center: {
  lat: 12.6940934,
  lng: 104.9103991,
  },
  mapId: "83073a74a7471b5d",
  });
  
   // Create the search box
   const input = document.getElementById("pac-input");
   const searchBox = new google.maps.places.SearchBox(input);
 
   // Bias the SearchBox results towards current map's viewport.
   map.addListener("bounds_changed", () => {
     searchBox.setBounds(map.getBounds());
   });
 
   let markers = [];
 
   // Listen for the event fired when the user selects a prediction and retrieve
   // more details for that place.
   searchBox.addListener("places_changed", () => {
     const places = searchBox.getPlaces();
 
     if (places.length == 0) {
       return;
     }
 
     // Clear out the old markers.
     markers.forEach((marker) => {
       marker.setMap(null);
     });
     markers = [];
 
     // For each place, get the icon, name and location.
     const bounds = new google.maps.LatLngBounds();
 
     places.forEach((place) => {
       if (!place.geometry || !place.geometry.location) {
         console.log("Returned place contains no geometry");
         return;
       }
 
       const icon = {
         url: place.icon,
         size: new google.maps.Size(71, 71),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(17, 34),
         scaledSize: new google.maps.Size(25, 25),
       };
 
       markers.push(
         new google.maps.Marker({
           map,
           icon,
           title: place.name,
           position: place.geometry.location,
         })
       );
 
       if (place.geometry.viewport) {
         // Only geocodes have viewport.
         bounds.union(place.geometry.viewport);
       } else {
         bounds.extend(place.geometry.location);
       }
     });
     map.fitBounds(bounds);
   });

}

initMap();

/* Google translator */

async function translateText() {
    const text = document.getElementById('inputText').value;
    const apiKey = 'AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc'; 
    const url = `https://translation.googleapis.com/language/translate/v3?key=${apiKey}`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`, // Or "ApiKey ${apiKey}" or other format
    };

    const data = {
      text: text,
      source_language: "en",
      target_language: "km",
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      const translatedText = responseData.translations[0].translatedText;
      return translatedText;
    } catch (error) {
      console.error("Error during translation:", error);
      return null;
    }
   }

translateText()
  .then((translatedText) => {
    if (translatedText) {
      console.log("Original text:", document.getElementById('inputText').value);
      console.log("Translated text:", translatedText);
      document.getElementById('outputText').value = translatedText;
    }
  });