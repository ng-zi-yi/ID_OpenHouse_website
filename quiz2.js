const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/*Questions*/
let questions = [
    {
        question: "What is NP's Mission?",
        choice1: "Our mission is to develop students who are confident, self-directed, innovative and adaptable - equipped for successin the future economy",
        choice2: "Our mission is to prepare our learners to be life-ready, work-ready, and world ready for the transformation of Singapore",
        answer: 1,
    },
    {
        question: "What is NP's Vission?",
        choice1: "Passion for learning. Values for life. Graduates who are ready for a global workplace.",
        choice2: "An educational institution of choice for nurturing innovative, entrepreneurial and cultured professionals.",
        answer: 1,
    },
    {
        question:"What is NP's slogan?",
        choice1: "Own Your Extra",
        choice2: "Be Part of Extra",
        answer: 2,
    },
    {
        question:"How many schools are there in NP?",
        choice1: "9",
        choice2: "10",
        answer: 2,
    },
    {
        question:"What are some special events NP students can participate in?",
        choice1: "Art Fiesta",
        choice2: "Sports Day",
        answer: 1,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html');
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${questionCounter/MAX_QUESTIONS * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.Length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {  
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score;
};

startGame()