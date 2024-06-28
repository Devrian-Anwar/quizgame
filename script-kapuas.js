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
    question: "Apa yang membuat Taman Kota Kapuas menarik untuk dikunjungi?",
    image: "img/tamankotakapuas.png",
    options: [
      "Spot untuk berenang",
      "Tempat untuk bermain ski air",
      "Tempat wisata murah meriah dengan banyak spot foto",
      "Pemandangan matahari terbit"
    ],
    answer: "Tempat wisata murah meriah dengan banyak spot foto",
    description: "Taman Kota Kapuas adalah tempat wisata yang murah meriah dengan banyak spot foto untuk dinikmati bersama keluarga.",
    answerImage: "img/tamankotakapuas.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Cafe Terapung di Kuala Kapuas istimewa?",
    image: "img/cafeterapung.png",
    options: [
      "Makanan dengan suasana unik di atas Sungai Kapuas",
      "Pemandangan gunung yang mempesona",
      "Koleksi seni terkenal",
      "Spot untuk bermain sepak bola"
    ],
    answer: "Makanan dengan suasana unik di atas Sungai Kapuas",
    description: "Cafe Terapung di Kuala Kapuas menawarkan makanan dengan suasana unik di atas Sungai Kapuas.",
    answerImage: "img/cafeterapung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Stadion Panunjung Tarung di Kuala Kapuas?",
    image: "img/stadionpanunjungtarung.png",
    options: [
      "Tempat untuk belajar memancing",
      "Tempat untuk bermain golf",
      "Tempat untuk menikmati pertandingan sepak bola lokal",
      "Tempat untuk mengunjungi museum"
    ],
    answer: "Tempat untuk menikmati pertandingan sepak bola lokal",
    description: "Stadion Panunjung Tarung adalah tempat untuk menikmati pertandingan sepak bola lokal di Kuala Kapuas.",
    answerImage: "img/stadionpanunjungtarung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat dinikmati di Pulau Telo di Kapuas?",
    image: "img/pulautelo.png",
    options: [
      "Tempat untuk berjemur",
      "Pemandangan matahari terbenam",
      "Keasrian alam dan kehidupan masyarakat lokal",
      "Spot untuk belajar berenang"
    ],
    answer: "Keasrian alam dan kehidupan masyarakat lokal",
    description: "Pulau Telo menawarkan keasrian alam dan kehidupan masyarakat lokal yang dapat dinikmati pengunjung.",
    answerImage: "img/pulautelo.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Air Terjun Masupa di desa Masupa istimewa?",
    image: "img/airterjunmasupa.png",
    options: [
      "Pemandangan matahari terbit",
      "Tempat untuk bermain ski air",
      "Air terjun yang terjaga keasriannya",
      "Kegiatan memancing di sungai terdekat"
    ],
    answer: "Air terjun yang terjaga keasriannya",
    description: "Air Terjun Masupa di desa Masupa adalah air terjun yang terjaga keasriannya, cocok untuk bermain air dan menikmati alam yang masih alami di Kuala Kapuas.",
    answerImage: "img/airterjunmasupa.png",
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
