let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

let homeScore = 0;
let awayScore = 0;


function addScoreHome(amount) {    
    homeScore += amount
    compareScores()
}

function addScoreAway(amount) {
    awayScore += amount
    compareScores()
}

function newGame() {
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0

    homeScore = 0
    awayScore = 0
}

function compareScores() {
    if(homeScore > awayScore) {
        awayScoreEl.textContent = awayScore
        homeScoreEl.textContent = homeScore + "*"
    } else if(homeScore === awayScore) {
        homeScoreEl.textContent = homeScore
        awayScoreEl.textContent = awayScore
    } else {
        homeScoreEl.textContent = homeScore
        awayScoreEl.textContent = awayScore + "*"
    }
}