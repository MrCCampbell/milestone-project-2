

// Google map//

function initMap() {
  map = new google.maps.Map(document.getElementById("cambodia-map"), {
    center: { lat: 12.6940934, lng: 104.9103991},
    zoom: 7,
    mapId: "e76c019228702018",

});
}



/* Google translator */


async function translateText(sourceLang, targetLang) {
  const text = document.getElementById('inputText').value;
  const apiKey = 'AIzaSyBFkcCW6bk1PXGNsU9y3fKkJSS_BGViKKc'; 
  const url = `https://translate.googleapis.com/$discovery/rest?version=v3beta1?key=${apiKey}`;
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
