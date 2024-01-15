const questions = [
  {
    question: "Who is the father of Economics?",
    answers: [
      { text: "Adam Sandler", correct: false },
      { text: "Seth Meyers", correct: false },
      { text: "Adam Smith", correct: true },
      { text: "Guido Zakarte", correct: false },
    ],
  },
  {
    question: "49 + 72 =",
    answers: [
      { text: "119", correct: false },
      { text: "121", correct: true },
      { text: "108", correct: false },
      { text: "101", correct: false },
    ],
  },
  {
    question: "Who is the inventor of the Linux Operating system?",
    answers: [
      { text: "Linux Linuxsson", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Mukesh Satya", correct: false },
      { text: "Linus Torvalds", correct: true },
    ],
  },
  {
    question: "Where is Yellowstone National Park?",
    answers: [
      { text: "United Kingdom", correct: false },
      { text: "Canada", correct: false },
      { text: "United States", correct: true },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Who is the author of 'Wuthering Heignts'?",
    answers: [
      { text: "Emily Bronte", correct: true },
      { text: "William Shakespeare", correct: false },
      { text: "Stephen King", correct: false },
      { text: "Fyodor Doestoevsky", correct: false },
    ],
  },
  {
    question: "Which instrument has only 3 strings?",
    answers: [
      { text: "Balalaika", correct: true },
      { text: "Guitar", correct: false },
      { text: "Banjo", correct: false },
      { text: "Harp", correct: false },
    ],
  },
];

const quizApp = document.getElementById("app-box");
const quizOptions = document.getElementById("quiz-options");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const startButton = document.getElementById("start-btn");

quizApp.style.display = "none";

let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  {
    if (questions.includes(randomIndex)) {
      getRandomQuestion();
    }
    return questions[randomIndex];
  }
}

function startQuiz() {
  quizApp.style.display = "block";
  quizOptions.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  getRandomQuestion();
}

showQuestion();

function showQuestion() {
  resetState();
  //let currentQuestion = questions[currentQuestionIndex];
  let currentQuestion = getRandomQuestion();
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  selectedBtn.classList.add("chosen");
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${Math.round(
    (score / questions.length) * 100
  )}%`;
  nextButton.innerHTML = "Take another quiz";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    //startQuiz();
  }
});

startQuiz;

/*
function retrieveData() {
  quizApp.style.display = "block";
  quizOptions.style.display = "none";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./the_gettysburg_address.txt", true);
  xhr.onload = function () {
    //const quizQuestions = JSON.parse(this.responseText);
    //console.log(document.getElementById("app-box")).innerHTML =
    // this.responseText;
    console.log(this.responseText);
  };
  xhr.send();
}


function retrieveData() {
  quizApp.style.display = "block";
  quizOptions.style.display = "none";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./questions.php", true);
  xhr.onload = function () {
    let quizQuestions = JSON.parse[this.responseText];
    //console.log(document.getElementById("app-box")).innerHTML =
    // this.responseText;
    console.log(quizQuestions);
  };
  xhr.send();
}



let url = "./questions.php";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  */
