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
    question: "Apa keunikan dari Air Terjun Sahai Gantung?",
    image: "img/airterjunsahaigantung.png",
    options: [
      "Terdapat gua di belakang air terjun",
      "Debit air deras yang berfungsi sebagai pembangkit listrik",
      "Memiliki air terjun bertingkat",
      "Dikelilingi batu karang yang tinggi"
    ],
    answer: "Debit air deras yang berfungsi sebagai pembangkit listrik",
    description: "Air Terjun Sahai Gantung memiliki debit air yang deras dan berfungsi sebagai pembangkit listrik tenaga mikro hidro.",
    answerImage: "img/airterjunsahaigantung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Air Terjun Suling Tambun?",
    image: "img/airterjunsulingtambun.png",
    options: [
      "Kolam renang alami di bawahnya",
      "Panorama indah dengan bebatuan unik dan air terjun bertingkat",
      "Lokasi untuk berkemah",
      "Jembatan gantung di sekitarnya"
    ],
    answer: "Panorama indah dengan bebatuan unik dan air terjun bertingkat",
    description: "Air Terjun Suling Tambun menawarkan panorama indah dengan bebatuan unik dan air terjun bertingkat.",
    answerImage: "img/airterjunsulingtambun.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Meriam Pengantin dinamai demikian?",
    image: "img/meriampengantin.png",
    options: [
      "Bentuknya menyerupai pengantin",
      "Terdapat dua meriam berdampingan seperti pengantin",
      "Meriam tersebut digunakan saat pernikahan",
      "Terdapat patung pengantin di sekitarnya"
    ],
    answer: "Terdapat dua meriam berdampingan seperti pengantin",
    description: "Meriam Pengantin dinamai karena terdapat dua meriam berdampingan seperti pengantin.",
    answerImage: "img/meriampengantin.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Pantai Bakau unik?",
    image: "img/pantaibakau.png",
    options: [
      "Dikelilingi tebing tinggi",
      "Memiliki sekitar 1000 pohon cemara dan pohon bakau",
      "Air lautnya berwarna hijau",
      "Terdapat mercusuar di tengah pantai"
    ],
    answer: "Memiliki sekitar 1000 pohon cemara dan pohon bakau",
    description: "Pantai Bakau memiliki sekitar 1000 pohon cemara dan pohon bakau yang membelah pantai, menciptakan suasana eksotis.",
    answerImage: "img/pantaibakau.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Danau Sembuluh menarik bagi pengunjung?",
    image: "img/danausembuluh.png",
    options: [
      "Terletak di tengah hutan lebat",
      "Memiliki pasir putih yang bersih dan panorama indah",
      "Dikelilingi oleh pegunungan",
      "Adanya air terjun di sekitarnya"
    ],
    answer: "Memiliki pasir putih yang bersih dan panorama indah",
    description: "Danau Sembuluh menawarkan panorama indah dengan pasir putih yang bersih, menarik banyak pengunjung.",
    answerImage: "img/danausembuluh.png",
    score: 20,
    wrongScore: -10
  }
  
      
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
