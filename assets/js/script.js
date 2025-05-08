
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

		const marker = new google.maps.Marker({
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
  const apiKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2i14qc3hAjFMC\naF9uZHZDUROSoHuWZ08hx6ueJ9inXgVjorwxf5It8/TXf+mN5nn9ti1ze3oxj14+\nGj8u/QDrkHXzk8lJRDkxk4Xd4KaMpoU3D1uISRS+7i64pcH+UkvzSAd9zHsPPZtu\n6O/rw/BH4XUG7g1zshx0aHPwntcNaKFpGxcNF3fzFuX83oy8s2rUFoMP1LvIK288\nFAhOXVU6AZK68h5O4JcZ1MtnSCRpgUoJM5/0iJAFqSJIss51Ql1pjMQkpE3sCuoq\nT7mDfBDs5Z+j/kqsLR/3hibRnbqemrrBDXB2hz0EARQV9bpnFBtnUs0AGT3+Rh1G\n3hpE0LsRAgMBAAECggEABfuBLHlcbfqfU5FPu9iiZNRC1MPKSxiDiBUQ8XnnNHx9\nBxn3qpReij+gFQIv2X79vWAvowTPYVGMVlMSQign5CB30iHUN2DLUk3uNaJhuPMx\n41cfMgMpoTSBftsNVZg1PaHNH40AlTQ43GiZSM/zB2sK1J1ffty96J19+7s762g1\nxm/smg+m0UbRmbUdvk8J7PlH2KGRmRPH009Vgsq8mgw6XmqLVhXJQ7qaWSlEFYHn\nhbZt495GpTo8aRhCemLgchxZTgncJncllwVosALu5tXlUNf5pxgPbAtSzzbYcxZ+\nApH9h9JWO/ntTqQqY2u596nnjda9JuqWdQEziLTh4QKBgQDrC2FecYBXRTJxMsgQ\nVYHYXuxBn9LGmbla8tVLL4Xk710/TA6q8G+fsk4GXWZFHQQE9Z0t8ZGYGFPv8Bfs\nhHSfNJzRG53SxTeSBjWqKUdL4n+rSmGCa51WXsJQ8OVSSXm7K85fSFVxUxkDRQYK\n/154wdnz9e70GoXYKl7qmKKnoQKBgQDG0bvziNrGjLJE4unRSJR+vM3YLCz8+n4o\nr9HbU+0yO87ZjPMrLu3WQpIXUORDnDMhJDDYWKh+k0aYHkFvmMDzMjaDWCYFlywi\nkSWW1HWa5Zt17y9SEs/GuUR1xKHkBgXVX90WZw6XJIKSDkkgh4rMqreCRuFlnszd\n/htI3NedcQKBgQDf5dZZ3erwtxTm6gXUMW/gCgQqOzHQR41eyqVN2rZEL5P3AN+U\nDDd4u6RBweTy/0Hd645Pvqb/aGVE0cQoZMCnC7o6I4GCzqUx78JdFrc43UjahZ8/\nWn3lUZzu95qreRyBpKgQ8dmaexr/l1e7UCnRBHA3SdXXKBDJqwsBlGaVIQKBgC7X\nGsC1bVV5sEYqb4uu3c0+DgDv52lyWmabhYV2sFs1W/ZFDsUNuVrRNDnqBN0o36Lf\nM+LEgG3RpMAR4Li59DtXiSBIlCydAPjj2Uc/prVngsi2IR/k7q6S114nhTyDbrxm\naV/tx7I0F87xLqlLRZgSYEmBCXk3gGyMgUEZRnMBAoGBAJwta884ppfS93xKulxv\nDqbVr0FvHboj2bvL4xDqzMp60Gz6OAnolEs9eBSdG7VrvkuBp02z8c/3PM6SlKC8\nMv0OgmC3BCFo7DE7OYrvmFO4CBQp3/SvNYpbAFJCYf8jPuVw5bCm+xlFvh3b+u/D\nf4yCgkpGlEztcmlrkU0NAv+d";
  const url = "https://www.googleapis.com/robot/v1/metadata/x509/khmer-translate%40semiotic-primer-454323-n5.iam.gserviceaccount.com?key=${apiKey}";
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

 // Example usage:

const apiKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2i14qc3hAjFMC\naF9uZHZDUROSoHuWZ08hx6ueJ9inXgVjorwxf5It8/TXf+mN5nn9ti1ze3oxj14+\nGj8u/QDrkHXzk8lJRDkxk4Xd4KaMpoU3D1uISRS+7i64pcH+UkvzSAd9zHsPPZtu\n6O/rw/BH4XUG7g1zshx0aHPwntcNaKFpGxcNF3fzFuX83oy8s2rUFoMP1LvIK288\nFAhOXVU6AZK68h5O4JcZ1MtnSCRpgUoJM5/0iJAFqSJIss51Ql1pjMQkpE3sCuoq\nT7mDfBDs5Z+j/kqsLR/3hibRnbqemrrBDXB2hz0EARQV9bpnFBtnUs0AGT3+Rh1G\n3hpE0LsRAgMBAAECggEABfuBLHlcbfqfU5FPu9iiZNRC1MPKSxiDiBUQ8XnnNHx9\nBxn3qpReij+gFQIv2X79vWAvowTPYVGMVlMSQign5CB30iHUN2DLUk3uNaJhuPMx\n41cfMgMpoTSBftsNVZg1PaHNH40AlTQ43GiZSM/zB2sK1J1ffty96J19+7s762g1\nxm/smg+m0UbRmbUdvk8J7PlH2KGRmRPH009Vgsq8mgw6XmqLVhXJQ7qaWSlEFYHn\nhbZt495GpTo8aRhCemLgchxZTgncJncllwVosALu5tXlUNf5pxgPbAtSzzbYcxZ+\nApH9h9JWO/ntTqQqY2u596nnjda9JuqWdQEziLTh4QKBgQDrC2FecYBXRTJxMsgQ\nVYHYXuxBn9LGmbla8tVLL4Xk710/TA6q8G+fsk4GXWZFHQQE9Z0t8ZGYGFPv8Bfs\nhHSfNJzRG53SxTeSBjWqKUdL4n+rSmGCa51WXsJQ8OVSSXm7K85fSFVxUxkDRQYK\n/154wdnz9e70GoXYKl7qmKKnoQKBgQDG0bvziNrGjLJE4unRSJR+vM3YLCz8+n4o\nr9HbU+0yO87ZjPMrLu3WQpIXUORDnDMhJDDYWKh+k0aYHkFvmMDzMjaDWCYFlywi\nkSWW1HWa5Zt17y9SEs/GuUR1xKHkBgXVX90WZw6XJIKSDkkgh4rMqreCRuFlnszd\n/htI3NedcQKBgQDf5dZZ3erwtxTm6gXUMW/gCgQqOzHQR41eyqVN2rZEL5P3AN+U\nDDd4u6RBweTy/0Hd645Pvqb/aGVE0cQoZMCnC7o6I4GCzqUx78JdFrc43UjahZ8/\nWn3lUZzu95qreRyBpKgQ8dmaexr/l1e7UCnRBHA3SdXXKBDJqwsBlGaVIQKBgC7X\nGsC1bVV5sEYqb4uu3c0+DgDv52lyWmabhYV2sFs1W/ZFDsUNuVrRNDnqBN0o36Lf\nM+LEgG3RpMAR4Li59DtXiSBIlCydAPjj2Uc/prVngsi2IR/k7q6S114nhTyDbrxm\naV/tx7I0F87xLqlLRZgSYEmBCXk3gGyMgUEZRnMBAoGBAJwta884ppfS93xKulxv\nDqbVr0FvHboj2bvL4xDqzMp60Gz6OAnolEs9eBSdG7VrvkuBp02z8c/3PM6SlKC8\nMv0OgmC3BCFo7DE7OYrvmFO4CBQp3/SvNYpbAFJCYf8jPuVw5bCm+xlFvh3b+u/D\nf4yCgkpGlEztcmlrkU0NAv+d"; 
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

}