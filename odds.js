const apiKey = "e80a75c9bc8c705218ece23052c94474";
const endPoint = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
const nflGames = document.getElementById("scoreboard");


const displayOdds = async () => {
    const res = await fetch(endPoint);
    const data = await res.json();
    
    
    return data
}



const testFunct = async () => {
    const payload = await displayOdds();

    let scoreBoard = payload.events.map((object) => {
        const { name } = object;
        return `
        <div class="container"><p>Game: ${name}</p></div>`
    }).join("");
    
nflGames.innerHTML = scoreBoard;
    

}


testFunct();

