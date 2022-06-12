var quotes = [
    "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
    "No matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow.",
    "There is no greater agony than bearing an untold story inside you.",
    "The human spirit is more powerful than any drug and that is what needs to be nourished, with work, play, friendship, family. These are the things that matter.",
]
function getQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
    
}




