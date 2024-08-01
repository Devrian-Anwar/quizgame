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
    question: "Apa yang menjadikan Air Terjun Beruang menarik untuk dikunjungi?",
    image: "img/airterjunberuang.png",
    options: [
      "Pemandangan laut yang indah",
      "Keindahan alam pegunungan dan mata air menyegarkan",
      "Banyaknya fasilitas rekreasi",
      "Akses mudah dengan kendaraan umum"
    ],
    answer: "Keindahan alam pegunungan dan mata air menyegarkan",
    description: "Air Terjun Beruang menawarkan keindahan alam pegunungan dengan mata air yang menyegarkan, menjadikannya menarik untuk dikunjungi.",
    answerImage: "img/airterjunberuang.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Bendungan Sungai Sala menjadi objek wisata populer?",
    image: "img/bendungansungaisala.png",
    options: [
      "Untuk berenang di air yang tenang",
      "Untuk memancing dan menikmati aliran sungai yang tenang",
      "Untuk hiking di sekitarnya",
      "Untuk berkemah di area yang luas"
    ],
    answer: "Untuk memancing dan menikmati aliran sungai yang tenang",
    description: "Bendungan Sungai Sala populer untuk memancing dan menikmati aliran sungai yang tenang.",
    answerImage: "img/bendungansungaisala.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menambah ketenangan di Air Terjun Habangoi?",
    image: "img/airterjunhabangoi.png",
    options: [
      "Suara gemericik air terjun",
      "Suasana perkotaan yang dekat",
      "Ramainya pengunjung",
      "Fasilitas modern"
    ],
    answer: "Suara gemericik air terjun",
    description: "Di Air Terjun Habangoi, suara gemericik air terjun menambah ketenangan.",
    answerImage: "img/airterjunhabangoi.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa nilai historis dari Bukit Batu?",
    image: "img/bukitbatu.png",
    options: [
      "Sebagai tempat pertemuan kerajaan",
      "Tempat bersemedi pahlawan lokal",
      "Lokasi pertempuran bersejarah",
      "Situs kerajaan kuno"
    ],
    answer: "Tempat bersemedi pahlawan lokal",
    description: "Bukit Batu memiliki nilai historis sebagai tempat bersemedi pahlawan lokal.",
    answerImage: "img/bukitbatu.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang terkenal di Bukit Bulan?",
    image: "img/bukitbulan.png",
    options: [
      "Kolam renang alami",
      "Penangkaran lebah madu terbaik",
      "Candi kuno",
      "Pusat perbelanjaan"
    ],
    answer: "Penangkaran lebah madu terbaik",
    description: "Bukit Bulan terkenal sebagai lokasi penangkaran lebah madu terbaik.",
    answerImage: "img/bukitbulan.png",
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
