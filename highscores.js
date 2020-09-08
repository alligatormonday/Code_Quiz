// Constants 
const userHighscores = document.querySelector("#highscore-list");
// Constants end

// Local Storage
window.onload = () => {
    let userScores = JSON.parse(window.localStorage.getItem("high-scores"));
    userScores.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item.initials + ":" + item.score;
        userHighscores.appendChild(li);
        });
}
// Local Storage end
