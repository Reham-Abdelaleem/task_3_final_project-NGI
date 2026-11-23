const destinations = [
  {
    number: "01",
    country: "FRANCE",
    name: "Paris",
    description:
      "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "images/paris.jpg",
  },
  {
    number: "02",
    country: "JAPAN",
    name: "Tokyo",
    description:
      "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "images/tokyo.jpg",
  },
  {
    number: "03",
    country: "ITALY",
    name: "Rome",
    description:
      "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    image: "images/roma.jpg",
  },
  {
    number: "04",
    country: "EGYPT",
    name: "Cairo",
    description:
      "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    continent: "Africa",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    image: "images/cairo.jpg",
  },
];

let currentIndex = 0;

// HTML Elements
const cityNumber = document.getElementById("placeCount");
const country = document.getElementById("placeCountry");
const cityName = document.getElementById("placeName");
const description = document.getElementById("placeDescription");
const continent = document.getElementById("placeContinent");
const food = document.getElementById("placeFood");
const place = document.getElementById("placeLandmark");
const language = document.getElementById("placeLanguage");
const cityImage = document.getElementById("placePhoto");
const imageNumber = document.getElementById("photoCount");
const dotsContainer = document.getElementById("indicators");

// Display Destination
function showDestination(index) {
  const city = destinations[index];

  cityName.textContent = city.name;
  country.textContent = city.country;
  continent.textContent = city.continent;
  food.textContent = city.food;
  place.textContent = city.place;
  language.textContent = city.language;
  description.textContent = city.description;

  cityNumber.textContent = `${city.number} / 04`;
  imageNumber.textContent = city.number;

  cityImage.src = city.image;
  cityImage.alt = city.name;

  updateDots();
}

// Next Destination
function nextDestination() {
  currentIndex++;

  if (currentIndex >= destinations.length) {
    currentIndex = 0;
  }

  showDestination(currentIndex);
}

// Previous Destination
function previousDestination() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = destinations.length - 1;
  }

  showDestination(currentIndex);
}

// Create Navigation Dots
function createDots() {
  destinations.forEach((city, index) => {
    const dot = document.createElement("span");

    dot.classList.add("indicator");

    dot.addEventListener("click", function () {
      currentIndex = index;
      showDestination(currentIndex);
    });

    dotsContainer.appendChild(dot);
  });
}

// Update Active Dot
function updateDots() {
  const dots = document.querySelectorAll(".indicator");

  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

// Button Events
document
  .getElementById("forwardBtn")
  .addEventListener("click", nextDestination);

document
  .getElementById("backBtn")
  .addEventListener("click", previousDestination);

// Explore More Button
document.getElementById("discoverBtn").addEventListener("click", function () {
  const city = destinations[currentIndex];

  alert(
    "Discover " +
      city.name +
      " in " +
      city.country +
      "!\nFamous Place: " +
      city.place,
  );
});

// Initialize Slider
createDots();
showDestination(currentIndex);
