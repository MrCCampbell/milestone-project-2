

/* Google map */

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

/* Google translator */

async function translateText(textToTranslate, sourceLang, targetLang, apiKey) {
    const text = document.getElementById('inputText').value;
    const apiKey = 'AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc'; 
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
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      const translatedText = data.data.translations[0].translatedText;
      document.getElementById('outputText').value = translatedText;
      return responseData.translated_text; // Assuming the API returns "translated_text"
    } catch (error) {
      console.error("Error during translation:", error);
      return null;
    }
   }

   // Example usage:
const apiKey = "AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc"; // Replace with your actual API key
const textToTranslate = "Hello, how are you?";
const sourceLanguage = "en";
const targetLanguage = "kh";

translateText(textToTranslate, sourceLanguage, targetLanguage, apiKey)
  .then((translatedText) => {
    if (translatedText) {
      console.log("Original text:", textToTranslate);
      console.log("Translated text:", translatedText);
      // Update the UI with the translated text here
    }
  });