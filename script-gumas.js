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
    question: "Apa aktivitas yang dapat dilakukan di Batu Suli?",
    image: "img/batusuli.png",
    options: [
      "Bermain ski",
      "Panjat tebing dan memancing",
      "Berbelanja",
      "Bersepeda gunung"
    ],
    answer: "Panjat tebing dan memancing",
    description: "Di Batu Suli, wisatawan dapat menikmati panjat tebing dan memancing.",
    answerImage: "img/batusuli.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang harus diperhatikan wisatawan saat mengunjungi Batu Antang?",
    image: "img/batuantang.png",
    options: [
      "Mengambil suvenir",
      "Menaati aturan dan menjaga kesopanan",
      "Membuat api unggun",
      "Memotret tanpa izin"
    ],
    answer: "Menaati aturan dan menjaga kesopanan",
    description: "Batu Antang memiliki nilai sakral dan pengunjung harus menaati aturan serta menjaga kesopanan.",
    answerImage: "img/batuantang.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Monumen Tambun Bungai tetap menjadi daya tarik di Gunung Mas?",
    image: "img/monumentambunbungai.png",
    options: [
      "Pemandangan alamnya yang menakjubkan",
      "Keindahan arsitektur modernnya",
      "Merupakan situs bersejarah meskipun mengalami kerusakan",
      "Banyaknya kegiatan festival"
    ],
    answer: "Merupakan situs bersejarah meskipun mengalami kerusakan",
    description: "Monumen Tambun Bungai menampilkan tokoh legenda Dayak dan tetap menjadi daya tarik meskipun ada kerusakan.",
    answerImage: "img/monumentambunbungai.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Pegunungan Schwaner terkenal?",
    image: "img/pegununganschwaner.png",
    options: [
      "Tempat olahraga ekstrem",
      "Keindahan matahari terbit dan terbenam",
      "Area perbelanjaan",
      "Situs bersejarah"
    ],
    answer: "Keindahan matahari terbit dan terbenam",
    description: "Pegunungan Schwaner terkenal karena menawarkan pemandangan matahari terbit dan terbenam yang memukau.",
    answerImage: "img/pegununganschwaner.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa Puruk Sandukui dianggap ikon wisata Gunung Mas?",
    image: "img/puruksandukui.png",
    options: [
      "Mudah diakses",
      "Bentuknya menyerupai jari telunjuk dan sejarah suku Ot Danum",
      "Adanya fasilitas modern",
      "Pantai yang indah"
    ],
    answer: "Bentuknya menyerupai jari telunjuk dan sejarah suku Ot Danum",
    description: "Puruk Sandukui memiliki bentuk yang unik dan dianggap sebagai tempat peristirahatan kapal Nabi Nuh, serta terkait dengan sejarah suku Ot Danum.",
    answerImage: "img/puruksandukui.png",
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
