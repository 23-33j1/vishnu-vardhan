<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Joke Generator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: #f9f9f9;
    }
    #joke-container {
      margin: 20px auto;
      padding: 20px;
      width: 60%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    #setup {
      font-size: 1.2rem;
      margin-bottom: 10px;
      font-weight: bold;
    }
    #punchline {
      font-size: 1rem;
      color: #444;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      background: #007BFF;
      color: white;
      transition: 0.3s;
    }
    button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h1> Random Joke Generator</h1>
  <div id="joke-container">
    <p id="setup">Click "Get Joke" to start!</p>
    <p id="punchline"></p>
  </div>
  <button onclick="getJoke()">Get Joke</button>
  <button onclick="getJoke()">Next Joke</button>

  <script>
    // Fetch joke from API
   async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        displayJoke(data);
    } catch (error) {
        document.getElementById("setup").textContent = "Couldn’t fetch a joke, try again!";
        document.getElementById("punchline").textContent = "";
    }
}

// Update DOM with joke
function displayJoke(joke) {
    document.getElementById("setup").textContent = joke.setup;
    document.getElementById("punchline").textContent = joke.punchline;
}
<script src="script.js"></script>
  </script>
</body>
</html>





















