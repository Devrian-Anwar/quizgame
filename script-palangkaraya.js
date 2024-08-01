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
    question: "Apa yang menjadi daya tarik utama Jembatan Kahayan?",
    image: "img/jembatankahayan.png",
    options: [
      "Kedalaman sungainya",
      "Arsitektur megah dan pemandangan saat matahari terbenam",
      "Banyaknya pedagang kaki lima",
      "Kecepatan arus air"
    ],
    answer: "Arsitektur megah dan pemandangan saat matahari terbenam",
    description: "Jembatan Kahayan menjadi daya tarik wisata dengan arsitekturnya yang megah, terutama saat matahari terbenam.",
    answerImage: "img/jembatankahayan.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membedakan Taman Wisata Kumkum dari taman lainnya?",
    image: "img/tamanwisatakumkum.png",
    options: [
      "Banyaknya wahana permainan",
      "Keberadaan satwa khas Borneo dan suasana sejuk",
      "Fasilitas olahraga",
      "Kolam renang besar"
    ],
    answer: "Keberadaan satwa khas Borneo dan suasana sejuk",
    description: "Taman Wisata Kumkum menampilkan berbagai satwa khas Borneo dalam suasana yang sejuk dan rindang.",
    answerImage: "img/tamanwisatakumkum.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang ditawarkan Sungai Kahayan kepada wisatawan?",
    image: "img/sungaikahayan.png",
    options: [
      "Kecepatan arus yang menantang",
      "Pemandangan indah dan kehidupan unik masyarakat Dayak",
      "Banyaknya restoran terapung",
      "Kemungkinan menyelam yang menarik"
    ],
    answer: "Pemandangan indah dan kehidupan unik masyarakat Dayak",
    description: "Sungai Kahayan menawarkan pemandangan yang indah dan kehidupan unik masyarakat Dayak di sekitarnya.",
    answerImage: "img/sungaikahayan.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menjadikan Kalawa Waterpark populer di Palangkaraya?",
    image: "img/kalawawaterpark.png",
    options: [
      "Adanya kebun binatang mini",
      "Berbagai wahana seru seperti Kalawa Slide dan Lazy River",
      "Fasilitas berkemah",
      "Pemandangan pegunungan"
    ],
    answer: "Berbagai wahana seru seperti Kalawa Slide dan Lazy River",
    description: "Kalawa Waterpark populer karena berbagai wahana seru seperti Kalawa Slide dan Lazy River, menjadikannya destinasi keluarga yang sempurna.",
    answerImage: "img/kalawawaterpark.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat dilakukan di Bukit Tangkiling?",
    image: "img/bukittangkiling.png",
    options: [
      "Bermain ski",
      "Trekking dan ziarah ke bukit biara pertapaan",
      "Berkemah di pantai",
      "Berbelanja oleh-oleh khas"
    ],
    answer: "Trekking dan ziarah ke bukit biara pertapaan",
    description: "Di Bukit Tangkiling, pengunjung dapat menikmati trekking dan ziarah ke bukit biara pertapaan, sambil menikmati udara segar.",
    answerImage: "img/bukittangkiling.png",
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
