const landingPage = document.querySelector(".landing-page");
const studyPage = document.querySelector(".study-page");
const quizPage = document.querySelector(".quiz-page");
const questionElement = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupImage = document.getElementById("popup-image");
const popupDescription = document.getElementById("popup-description");
const popupScore = document.getElementById("popup-score");

const questions = [
  {
    question: "Apa yang menarik dari Air Terjun Kedong Air di Barito Timur?",
    image: "img/airterjunkedongair.png",
    options: [
      "Pemandangan laut yang luas",
      "Gemercik air jernih di tengah pepohonan hijau subur",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Gemercik air jernih di tengah pepohonan hijau subur",
    description: "Air Terjun Kedong Air di Barito Timur menawarkan gemercik air jernih di tengah pepohonan hijau subur. Tempat ini sangat populer untuk bermain air dan menikmati keindahan alam yang tak pernah surut.",
    answerImage: "img/airterjunkedongair.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Rumah Betang di Barito Timur istimewa?",
    image: "img/rumahbetang.png",
    options: [
      "Pemandangan laut yang luas",
      "Tempat edukasi dengan museum benda bersejarah",
      "Spot untuk bermain ski air",
      "Tempat untuk berjemur"
    ],
    answer: "Tempat edukasi dengan museum benda bersejarah",
    description: "Rumah Betang di Barito Timur adalah peninggalan sejarah Dayak yang kini menjadi tempat edukasi dengan museum benda bersejarah. Cocok untuk penggemar sejarah dan budaya Dayak.",
    answerImage: "img/rumahbetang.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang istimewa dari Museum Lewu Hante di Barito Timur?",
    image: "img/museumlewhante.png",
    options: [
      "Pemandangan laut yang luas",
      "Rumah panggung suku Dayak yang luas",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Rumah panggung suku Dayak yang luas",
    description: "Museum Lewu Hante di Barito Timur adalah rumah panggung suku Dayak yang luas, menyimpan berbagai artefak bersejarah dan sering digunakan untuk acara kebudayaan.",
    answerImage: "img/museumlewhante.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Gua Liang Saragi di Barito Timur?",
    image: "img/gualiangsaragi.png",
    options: [
      "Pemandangan laut yang luas",
      "Gua yang mengalirkan air sungai bening",
      "Spot untuk bermain ski air",
      "Tempat untuk berjemur"
    ],
    answer: "Gua yang mengalirkan air sungai bening",
    description: "Gua Liang Saragi di Barito Timur adalah gua yang mengalirkan air sungai bening. Pengunjung dapat menyewa perahu untuk menikmati pemandangan alam di dalam gua yang unik ini.",
    answerImage: "img/gualiangsaragi.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Bendungan Tampa di Barito Timur?",
    image: "img/bendungantampa.png",
    options: [
      "Pemandangan laut yang luas",
      "Pemandangan hamparan sawah hijau yang luas",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Pemandangan hamparan sawah hijau yang luas",
    description: "Bendungan Tampa di Barito Timur tidak hanya mengendalikan aliran sungai, tetapi juga menawarkan pemandangan hamparan sawah hijau yang luas. Tempat yang tepat untuk santai dan menikmati keindahan alam.",
    answerImage: "img/bendungantampa.png",
    score: 20,
    wrongScore: -10
  },
  
  
  // Tambahkan pertanyaan lainnya di sini
];

let currentQuestionIndex = 0;
let skor = 0;

function showQuizPage() {
  landingPage.style.display = "none";
  quizPage.style.display = "block";
  currentQuestionIndex = 0;
  skor = 0;
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    popupMessage.textContent = "Jawaban Benar!";
    skor += currentQuestion.score;
  } else {
    popupMessage.textContent = "Jawaban Salah!";
    skor += currentQuestion.wrongScore;
  }
  popupImage.src = currentQuestion.image;
  popupDescription.textContent = currentQuestion.description;
  popupScore.textContent = `Skor Anda: ${skor}`;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showLandingPage();
  }
}

function showLandingPage() {
  landingPage.style.display = "block";
  quizPage.style.display = "none";
  document.getElementById("skoranda").textContent = `Skor anda : ${skor}`;
}
