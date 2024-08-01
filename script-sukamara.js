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
    question: "Apa yang dapat Anda nikmati di Danau Burung di Sukamara?",
    image: "img/danauburung.png",
    options: [
      "Melihat pemandangan pegunungan yang tinggi",
      "Menikmati kealamian hutan gambut dan melihat burung migran",
      "Berenang di danau yang dalam",
      "Memancing ikan air tawar"
    ],
    answer: "Menikmati kealamian hutan gambut dan melihat burung migran",
    description: "Danau Burung di Sukamara menawarkan pengalaman melihat kealamian hutan gambut dan burung migran yang singgah di sana.",
    answerImage: "img/danauburung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Bukit Patung di Sukamara?",
    image: "img/bukitpatung.png",
    options: [
      "Pemandangan perkebunan kopi",
      "Air terjun yang menyegarkan",
      "Panorama pegunungan yang tinggi",
      "Pemandangan laut yang indah"
    ],
    answer: "Air terjun yang menyegarkan",
    description: "Bukit Patung di Sukamara menawarkan pengalaman menyegarkan dengan air terjun yang indah.",
    answerImage: "img/bukitpatung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Pantai Kampung Baru menarik untuk dikunjungi?",
    image: "img/pantaikampungbaru.png",
    options: [
      "Angin laut yang dingin",
      "Pasir pantai yang panas",
      "Laut biru yang mempesona dan kehidupan perkampungan nelayan",
      "Keberadaan hotel mewah di sekitar pantai"
    ],
    answer: "Laut biru yang mempesona dan kehidupan perkampungan nelayan",
    description: "Pantai Kampung Baru di Sukamara menawarkan pemandangan laut biru yang mempesona dan kehidupan perkampungan nelayan yang menarik.",
    answerImage: "img/pantaikampungbaru.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat Anda nikmati di Pantai Kuala Jelai di Sukamara?",
    image: "img/pantaikualajelai.png",
    options: [
      "Pantai yang bersih dan terjaga",
      "Pemandangan pegunungan yang hijau",
      "Udara segar di tengah hutan",
      "Aktivitas selancar di ombak besar"
    ],
    answer: "Pantai yang bersih dan terjaga",
    description: "Pantai Kuala Jelai di Sukamara menawarkan pengalaman menikmati pantai yang bersih dan terjaga.",
    answerImage: "img/pantaikualajelai.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Pantai Tanjung Nipah di Sukamara terkenal?",
    image: "img/pantaitanjungnipah.png",
    options: [
      "Karena terdapat pohon cemara yang melimpah",
      "Karena pantai ini dikenal sebagai tempat selancar terbaik",
      "Karena terdapat fasilitas spa mewah di sekitar pantai",
      "Karena pantai ini memiliki air yang sangat jernih"
    ],
    answer: "Karena terdapat pohon cemara yang melimpah",
    description: "Pantai Tanjung Nipah di Sukamara terkenal dengan keberadaan pohon cemara yang melimpah di sepanjang pantai.",
    answerImage: "img/pantaitanjungnipah.png",
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
