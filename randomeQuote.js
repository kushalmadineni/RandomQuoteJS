const qt = document.getElementById('quote');
const btn = document.getElementById('new-quote');
function randomQuote(){ 
fetch('https://qapi.vercel.app/api/quotes')
.then(Response => Response.json())
.then(data=>{
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    qt.textContent = randomQuote.quote;
})
.catch(error => {
    console.error("Error fetching quotes:", error);
    qt.innerHTML = "Failed to load a quote. Please try again.";
});
}
btn.addEventListener('click',randomQuote)

