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
        question: "Apa yang ditawarkan oleh Air Terjun Tosah di Kabupaten Murung Raya?",
        image: "img/airterjuntosah.jpg",
        options: [
          "Pemandangan laut",
          "Kolam renang buatan",
          "Pemandangan alam yang indah dengan aliran air yang deras dan kolam alami yang jernih",
          "Museum sejarah"
        ],
        answer: "Pemandangan alam yang indah dengan aliran air yang deras dan kolam alami yang jernih",
        description: "Air Terjun Tosah menawarkan pemandangan alam yang indah dengan aliran air yang deras dan kolam alami yang jernih, cocok untuk berenang dan berendam.",
        answerImage: "img/airterjuntosah.jpg",
        score: 20,
        wrongScore: -10
      },
      {
        question: "Kapan tiang pertama Taman Sapan dipancangkan?",
        image: "img/tamansapan.jpeg",
        options: [
          "6 Oktober 2020",
          "6 Oktober 2021",
          "6 Oktober 2022",
          "6 Oktober 2023"
        ],
        answer: "6 Oktober 2022",
        description: "Taman Sapan dimulai dengan pemancangan tiang pertama pada 6 Oktober 2022.",
        answerImage: "img/tamansapan.jpeg",
        score: 20,
        wrongScore: -10
      },
      {
        question: "Berapa ketinggian Gunung Usung di atas permukaan laut?",
        image: "img/gunungusung.jpg",
        options: [
          "1.000 meter",
          "1.200 meter",
          "1.346 meter",
          "1.500 meter"
        ],
        answer: "1.346 meter",
        description: "Gunung Usung memiliki ketinggian sekitar 1.346 meter di atas permukaan laut.",
        answerImage: "img/gunungusung.jpg",
        score: 20,
        wrongScore: -10
      },
      {
        question: "Jembatan Merdeka menghubungkan Puruk Cahu dengan daerah-daerah dari arah mana?",
        image: "img/jembatanmerdeka.jpg",
        options: [
          "Muara Teweh dan Kalimantan Barat",
          "Muara Teweh dan Kalimantan Selatan",
          "Banjarmasin dan Kalimantan Utara",
          "Sampit dan Kalimantan Timur"
        ],
        answer: "Muara Teweh dan Kalimantan Selatan",
        description: "Jembatan Merdeka menghubungkan Puruk Cahu dengan daerah-daerah dari arah Muara Teweh dan Kalimantan Selatan.",
        answerImage: "img/jembatanmerdeka.jpg",
        score: 20,
        wrongScore: -10
      },
      {
        question: "Berapa tingkat yang dimiliki oleh Air Terjun Bumbun?",
        image: "img/airterjunbumbun.jpg",
        options: [
          "5 tingkat",
          "6 tingkat",
          "7 tingkat",
          "8 tingkat"
        ],
        answer: "7 tingkat",
        description: "Air Terjun Bumbun adalah air terjun 7 tingkat dengan aliran air yang lumayan deras.",
        answerImage: "img/airterjunbumbun.jpg",
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
