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
    question: "Apa yang menjadi daya tarik utama di Pantai Satiruk?",
    image: "img/pantaisatiruk.png",
    options: [
      "Pantai dengan karang yang indah",
      "Pasir putih yang terjaga kealamiannya",
      "Air terjun yang mengalir ke laut",
      "Kebun kelapa yang luas"
    ],
    answer: "Pasir putih yang terjaga kealamiannya",
    description: "Pantai Satiruk memiliki pasir putih yang indah dan terjaga kealamiannya, menjadi daya tarik utama bagi pengunjung.",
    answerImage: "img/pantaisatiruk.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat Anda temukan di Pantai Ujung Pandaran di malam hari?",
    image: "img/pantaiujungpandaran.png",
    options: [
      "Pesta pantai",
      "Kegiatan nelayan mencari ikan",
      "Pemandangan matahari terbenam",
      "Konser musik"
    ],
    answer: "Kegiatan nelayan mencari ikan",
    description: "Di Pantai Ujung Pandaran, Anda dapat menyaksikan kegiatan nelayan yang sibuk mencari ikan, terutama di malam hari.",
    answerImage: "img/pantaiujungpandaran.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat wisata susur Sungai Mentaya menarik bagi wisatawan?",
    image: "img/susursungaimentayasampit.png",
    options: [
      "Pemandangan perbukitan",
      "Pemandangan kota dan sungai yang indah",
      "Pantai pasir putih",
      "Keberadaan air terjun"
    ],
    answer: "Pemandangan kota dan sungai yang indah",
    description: "Susur Sungai Mentaya menawarkan pemandangan kota dan sekitar sungai yang indah, menarik bagi wisatawan domestik dan mancanegara.",
    answerImage: "img/susursungaimentayasampit.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menjadi daya tarik utama Rumah Betang Tumbang Gagu?",
    image: "img/rumahbetangtumbanggagu.png",
    options: [
      "Desain modern rumah betang",
      "Cerita sejarah panjang dan keindahan alam",
      "Kegiatan budaya setiap minggu",
      "Fasilitas olahraga"
    ],
    answer: "Cerita sejarah panjang dan keindahan alam",
    description: "Rumah Betang Tumbang Gagu menawarkan cerita sejarah yang panjang dan pemandangan alam yang masih alami.",
    answerImage: "img/rumahbetangtumbanggagu.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat Anda temukan di Taman Miniatur Budaya Kotawaringin Timur?",
    image: "img/tamanminiaturbudayakotawaringintimur.png",
    options: [
      "Kebun binatang mini",
      "Miniatur rumah adat dan tempat ibadah",
      "Galeri seni modern",
      "Taman bermain anak"
    ],
    answer: "Miniatur rumah adat dan tempat ibadah",
    description: "Taman Miniatur Budaya Kotawaringin Timur menawarkan miniatur rumah adat dan tempat ibadah yang mencerminkan keragaman budaya daerah.",
    answerImage: "img/tamanminiaturbudayakotawaringintimur.png",
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
