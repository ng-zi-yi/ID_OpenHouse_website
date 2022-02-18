const questions = [
    {
        "question": "What value is the most important to you?",
        "answer1": "Value-centricity",
        "answer1Total": "1",
        "answer2": "Respect",
        "answer2Total": "2",
        "answer3": "Initiative",
        "answer3Total": "3",
        "answer4": "Accomadating",
        "answer4Total": "4",
        "answer5": "Service",
        "answer5Total": "5",
        "answer6": "Uniqueness",
        "answer6Total": "6",
        "answer7": "Self-reliant",
        "answer7Total": "7",
        "answer8": "Humanity",
        "answer8Total": "8",
    },
    {
        "question": "What slogan fits you the most ?",
        "answer1": "YOUR FIRST BUSINESS CHOICE",
        "answer1Total": "1",
        "answer2": "LIVE DESIGN",
        "answer2Total": "2",
        "answer3": "ENGINEERING IS EVERYWHERE",
        "answer3Total": "3",
        "answer4": "THINK PEOPLE",
        "answer4Total": "4",
        "answer5": "A PASSION TO TOUCH LIVES",
        "answer5Total": "5",
        "answer6": "XPLORE. XCITE. XCEL",
        "answer6Total": "6",
        "answer7": "TAKING IT HIGHER",
        "answer7Total": "7",
        "answer8": "RE-CODE YOUR DNA",
        "answer8Total": "8",
    },
    {
        "question": "What is your most preferred working style?",
        "answer1": "Travelling",
        "answer1Total": "1",
        "answer2": "At Home",
        "answer2Total": "2",
        "answer3": "At Sites",
        "answer3Total": "3",
        "answer4": "Social Events",
        "answer4Total": "4",
        "answer5": "Medical Field",
        "answer5Total": "5",
        "answer6": "Surrounded with Lights and Camera",
        "answer6Total": "6",
        "answer7": "Surrounded by Servers",
        "answer7Total": "7",
        "answer8": "Laboratory",
        "answer8Total": "8",
    },
    {
        "question": "What is your strongest subject?",
        "answer1": "English",
        "answer1Total": "1",
        "answer2": "Design and Technology",
        "answer2Total": "2",
        "answer3": "Physics",
        "answer3Total": "3",
        "answer4": "Mother Tongue",
        "answer4Total": "4",
        "answer5": "Biology",
        "answer5Total": "5",
        "answer6": "Videography",
        "answer6Total": "6",
        "answer7": "Computing",
        "answer7Total": "7",
        "answer8": "Humanities",
        "answer8Total": "8",
    },
    {
        "question": "What is your preferred grading",
        "answer1": "End of Semester Tests, Course Work and Reports",
        "answer1Total": "1",
        "answer2": "End of Semester Tests, Practicals, Course Work",
        "answer2Total": "2",
        "answer3": "Final Exams, End of Semester Tests, Projects and Reports",
        "answer3Total": "3",
        "answer4": "Projects and Assessments",
        "answer4Total": "4",
        "answer5": "Final Exams, Final Practical Tests, Practicals and Course Work",
        "answer5Total": "5",
        "answer6": "Final Practical Tests, Practicals and Projects",
        "answer6Total": "6",
        "answer7": "End of Semester Tests, Practicals and Assessments",
        "answer7Total": "7",
        "answer8": "Final Practical Tests, Practicals, Assessments and Exams",
        "answer8Total": "8",
    },

]
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const option6 = document.querySelector('.option6');
const option7 = document.querySelector('.option7');
const option8 = document.querySelector('.option8');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.quiz1-result');

//Function to generate question 
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    const option6Total = questions[index].answer6Total;
    const option7Total = questions[index].answer7Total;
    const option8Total = questions[index].answer8Total;

    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option6.setAttribute('data-total', `${option6Total}`);
    option7.setAttribute('data-total', `${option7Total}`);
    option8.setAttribute('data-total', `${option8Total}`);

    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
    option6.innerHTML = `${question.answer6}`
    option7.innerHTML = `${question.answer7}`
    option8.innerHTML = `${question.answer8}`

}

function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }

    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Return school 
    let schoolResult;
    let schoolFile;
    if (totalScore <= 5) {
        schoolResult = "Business and Accountancy";
        schoolFile = "ba.html";
    }
    else if (totalScore <= 10) {
        schoolResult = "Design and Environment";
        schoolFile = "de.html";
    }
    else if (totalScore <= 15) {
        schoolResult = "Engineering";
        schoolFile = "soe.html";
    }
    else if (totalScore <= 20) {
        schoolResult = "Humanities and Social Sciences";
        schoolFile = "hms.html"
    }
    else if (totalScore <= 25) {
        schoolResult = "Health Sciences";
        schoolFile = "hs.html";
    }
    else if (totalScore <= 30) {
        schoolResult = "Film and Media Studies"
        schoolFile = "fms.html"
    }
    else if (totalScore <= 35) {
        schoolResult = "InfoComm Technology";
        schoolFile = "ict.html";
    }
    else if (totalScore <= 40) {
        schoolResult = "Life Sciences and Chemical Technology";
        schoolFile = "lsct.html";
    }

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == totalQuestions) {
        $("#quiz1-result").show();
        container.style.display = 'none';
        result.innerHTML =
            `<section class="container justify-content-center">
                    <div class="card text-center">
                        <div class="card-header">Results</div>
                            <div class="card-body">
                                <h5 class="card-title" id="schoolResults">School of ${schoolResult}</h5>
                                <p class="card-text">The school that fits you the most. Explore what the school's diploma's are!</p>
                                <a href=${schoolFile} class="btn btn-primary">Learn more</a>
                            </div>
                        <div class="card-footer text-muted"></div>
                    </div>
                </section>
                <div class="justify-content-center">
                    <button class="btn btn-success" onclick="window.location='index.html'">Home</button>
                    <button class="btn btn-primary" onclick="window.location='quiz.html'">More Quiz</button>
                </div>
            `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        location.reload();
    }
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);