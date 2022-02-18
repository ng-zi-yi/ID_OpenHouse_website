const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

//Write Final Score
finalScore.innerText = mostRecentScore
$(".valid-feedback").hide();

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveScoreBtn.addEventListener("click", saveHighScore());

saveHighScore = e => {
    e.preventDefault()

    let name = $("#username").val();
    let score = $("#finalScore").val();

    //AJAX Setting Post
    let jsondata = {
        "name": name,
        "score": score,
    };

    const APIKEY = "620f3d4834fd621565858780"
    var jsondata = { "field1": "xyz", "field2": "abc" };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-a4e7.restdb.io/rest/npquiz2",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(js)

        //Hide Save Button
        $(".valid-feedback").show();
    });

}
