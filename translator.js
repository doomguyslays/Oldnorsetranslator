// Old Norse dictionary

const dictionary = {

  "hello": "heill",

  "world": "heimr",

  "good": "góðr",

  "morning": "morgunn",

  "night": "nótt",

  "house": "hús",

  "tree": "tré",

  // Add more words to the dictionary

};

// Translate function

function translate() {

  const englishText = document.getElementById("englishText").value;

  const translation = translateText(englishText);

  document.getElementById("translation").textContent = translation;

}

// Translate text word by word

function translateText(text) {

  const words = text.toLowerCase().split(" ");

  const translatedWords = words.map(word => {

    return dictionary[word] || word; // Use dictionary translation if available

  });

  return translatedWords.join(" ");

}

