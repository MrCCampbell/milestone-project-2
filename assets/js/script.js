
// Google map//

let map;

async function initMap() {
  map = new google.maps.Map(document.getElementById("cambodia-map"), {
    center: { lat: 12.6940934, lng: 104.9103991},
    zoom: 7,
    mapId: "e76c019228702018",

});

// Name
// Latitude, Longitude
// Image URL
// ScaledSize Width, Height

const markers = [
  [
    "Phnom Penh",
    11.579014253646589,
    104.83982054604496,
    'assets/images/360_F_289873298_R6OHqOHcglPMoQFgqilcFZMF11Z7gxlx.jpg',
    40,
    30,
  ],
  [
    "Siem Reap",
    13.370358138792598,
    103.85675673362095,
    'assets/images/caption.jpg',
    40,
    30,
  ],
  [
    "Koh Rong",
    10.745939698274029,
    103.2290795767552,
    'assets/images/Phosphorescent-Plankton-Lights-in-koh-rong-island-cambodia-tours.jpg',
    40,
    30, 
  ],
  [
    "Kampot River",
    10.623637288844128,
    104.16856572477839,
    'assets/images/5439.jpg',
    40,
    30,
  ],
  [
    "Oudong",
    11.816538672642727,
    104.73792313450501,
    'assets/images/udong-att-b.jpg',
    40,
    30,
  ],
  [
    "Kirirom National Park",
    11.307850271611159,
    104.0396936110535,
    'assets/images/850kirirom3.jpg',
    40,
    30,
  ],
  [
    "Phnom Tamao",
    11.299745952334245,
    104.79052053604599,
    'assets/images/Tiger-Reintroduction-Program-Cambodia-e1622258987805-1200x675.jpg',
    40,
    30,
  ],
  ];

  for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.marker.AdvancedMarkerElement({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}

/* Google translator */


async function translateText(sourceLang, targetLang) {
  const text = document.getElementById('inputText').value;
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
