// fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
//     .then(resp => resp.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));


// Define the URL of the quotes API
const apiUrl = 'https://api.quotable.io/random';

// Function to fetch a random quote
async function fetchQuote() {
  try {
    // Make the HTTP request
    const response = await fetch(apiUrl);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    // Parse the JSON data
    const data = await response.json();
    
    // Log the quote to the console
    console.log(`"${data.content}" - ${data.author}`);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Call the function to fetch a quote
fetchQuote();
