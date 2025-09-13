// Select elements
const jokeBox = document.getElementById("jokeBox");
const getJokeBtn = document.getElementById("getJokeBtn");
const nextJokeBtn = document.getElementById("nextJokeBtn");

// Function to fetch joke JSON data from API
async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jokeData = await response.json();
    return jokeData;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
}

// Function to update DOM with joke or error message
function displayJoke(joke) {
  if (!joke) {
    jokeBox.innerHTML = `<p>Couldn’t fetch a joke, try again!</p>`;
    return;
  }
  jokeBox.innerHTML = `
    <div style="border:1px solid #333; padding: 15px; border-radius: 8px; background:#f9f9f9; max-width:400px; margin-top: 10px;">
      <p><strong>Setup:</strong> ${joke.setup}</p>
      <p><strong>Punchline:</strong> ${joke.punchline}</p>
    </div>
  `;
}

// Event handler for Get Joke button
getJokeBtn.addEventListener("click", async () => {
  getJokeBtn.disabled = true;
  nextJokeBtn.disabled = true;
  jokeBox.innerHTML = "<p>Loading joke...</p>";
  
  const joke = await getJoke();
  displayJoke(joke);

  getJokeBtn.disabled = false;
  nextJokeBtn.disabled = false;
});

// Event handler for Next Joke button
nextJokeBtn.addEventListener("click", async () => {
  nextJokeBtn.disabled = true;
  getJokeBtn.disabled = true;
  jokeBox.innerHTML = "<p>Loading joke...</p>";

  const joke = await getJoke();
  displayJoke(joke);

  nextJokeBtn.disabled = false;
  getJokeBtn.disabled = false;
});
