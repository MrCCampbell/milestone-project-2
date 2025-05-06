const myKey = config.MY_KEY

// Google maps

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
  
  var locations = [];

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

  if (typeof markerClusterer !== 'undefined') {
    new markerClusterer.MarkerClusterer({ markers, map });
  } else {
    console.error("markerClusterer is not defined. Please ensure the MarkerClusterer library is loaded.");
  }
}

initMap();


/* Google translator */


async function translateText(sourceLang, targetLang) {
  const text = document.getElementById('inputText').value;
  const apiKey = myKey; 
  const url = `https://translation.googleapis.com/language/translate/v3?key=${apiKey}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`, // Or "ApiKey ${apiKey}" or other format
  };

  const data = {
    text: text,
    source_language: sourceLang,
    target_language: targetLang,
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
    document.getElementById('outputText').value = translatedText;
    return translatedText;
  } catch (error) {
    console.error("Error during translation:", error);
    return null;
  }
 }

 // Example usage:

const apiKey = "AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc"; 
const textToTranslate = "Hello, how are you?";
const sourceLanguage = "en";
const targetLanguage = "km";

translateText(sourceLanguage, "km")
  .then((translatedText) => {
    if (translatedText) {
      console.log("Original text:", textToTranslate);
      console.log("Translated text:", translatedText);
      // Update the UI with the translated text here
    }
  })
