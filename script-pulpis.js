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
    question: "Apa yang menjadikan Danau Lais di Pulang Pisau istimewa?",
    image: "img/danaulais.png",
    options: [
      "Adanya air terjun",
      "Cocok untuk memancing dan keindahan alam",
      "Banyaknya perahu wisata",
      "Pasir putih yang luas"
    ],
    answer: "Cocok untuk memancing dan keindahan alam",
    description: "Danau Lais dikenal sebagai tempat yang ideal untuk memancing dan menikmati keindahan alam.",
    answerImage: "img/danaulais.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Kegiatan apa yang dapat dilakukan di Danau Begantung?",
    image: "img/danaubegantung.png",
    options: [
      "Berkemah di tepi danau",
      "Berenang di air terjun",
      "Memancing dan menikmati danau dengan perahu",
      "Berselancar di ombak besar"
    ],
    answer: "Memancing dan menikmati danau dengan perahu",
    description: "Di Danau Begantung, pengunjung dapat memancing dan menikmati danau dengan perahu.",
    answerImage: "img/danaubegantung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa daya tarik utama Danau Batu?",
    image: "img/danaubatu.png",
    options: [
      "Aktivitas selancar air",
      "Pemandangan indah dan budaya lokal yang terjaga",
      "Kolam renang alami",
      "Pasir pantai yang hangat"
    ],
    answer: "Pemandangan indah dan budaya lokal yang terjaga",
    description: "Danau Batu memikat pengunjung dengan pemandangan indah dan budaya lokal yang terjaga.",
    answerImage: "img/danaubatu.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Danau Sabuah menjadi tempat yang ideal untuk memancing?",
    image: "img/danausabuah.png",
    options: [
      "Banyaknya kios makanan",
      "Keindahan alami dan fasilitas yang memadai",
      "Adanya wisata selam",
      "Pasir pantai yang putih"
    ],
    answer: "Keindahan alami dan fasilitas yang memadai",
    description: "Danau Sabuah terkenal dengan keindahan alaminya dan fasilitas yang memadai, menjadikannya tempat ideal untuk memancing.",
    answerImage: "img/danausabuah.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Kapan waktu terbaik untuk mengunjungi Pantai Sematan di Pulang Pisau?",
    image: "img/pantaisematan.png",
    options: [
      "Pagi hari",
      "Malam hari",
      "Siang hari",
      "Saat matahari terbenam"
    ],
    answer: "Saat matahari terbenam",
    description: "Pantai Sematan menawarkan panorama indah dan laut jernih, terutama saat matahari terbenam.",
    answerImage: "img/pantaisematan.png",
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
