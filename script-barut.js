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
    question: "Apa yang menarik dari Gunung Pararawen di Barito Utara?",
    image: "img/gunungpararawen.png",
    options: [
      "Hutan lebat dan sungai kecil yang jernih",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru",
      "Tempat untuk berjemur"
    ],
    answer: "Hutan lebat dan sungai kecil yang jernih",
    description: "Gunung Pararawen menawarkan pesona alam yang luar biasa dengan hutan lebat dan sungai kecil yang jernih, serta menjadi habitat flora dan fauna liar.",
    answerImage: "img/gunungpararawen.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang dapat dinikmati di Bendungan Trinsing di desa Trinsing, Barito Utara?",
    image: "img/bendungantrinsing.png",
    options: [
      "Tempat untuk bermain ski air",
      "Kegiatan memancing yang seru",
      "Kemegahan istana kerajaan",
      "Berenang dan memancing di sekitar pepohonan rindang"
    ],
    answer: "Berenang dan memancing di sekitar pepohonan rindang",
    description: "Bendungan Trinsing di desa Trinsing cocok untuk berenang dan memancing di sekitar pepohonan rindang, sering dimanfaatkan warga untuk beraktivitas air.",
    answerImage: "img/bendungantrinsing.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Hutan Muara Teweh di desa Melayu, Barito Utara, istimewa?",
    image: "img/hutanmuarateweh.png",
    options: [
      "Kayu bakah yang unik",
      "Tempat untuk bermain golf",
      "Spot untuk berjemur",
      "Pemandangan matahari terbenam"
    ],
    answer: "Kayu bakah yang unik",
    description: "Hutan Muara Teweh di desa Melayu memiliki kayu bakah yang unik karena dapat mengeluarkan air, dan menawarkan petualangan menyeberangi sungai kecil.",
    answerImage: "img/hutanmuarateweh.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang istimewa dari Gunung Lumut di Barito Utara?",
    image: "img/gununglumut.png",
    options: [
      "Pemandangan lumut yang luas di hutan alaminya",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru",
      "Tempat untuk bermain sepak bola"
    ],
    answer: "Pemandangan lumut yang luas di hutan alaminya",
    description: "Gunung Lumut di Barito Utara menawarkan pemandangan lumut yang luas di hutan alaminya, tempat dikeramatkan oleh suku Dayak sebagai tempat arwah orang yang telah meninggal.",
    answerImage: "img/gununglumut.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Jembatan K.H Hasan Basri yang menghubungkan Barito Utara dan Murung Raya?",
    image: "img/jembatankhhasanbasri.png",
    options: [
      "Pemandangan matahari terbit",
      "Tempat untuk bermain ski air",
      "Kegiatan memancing yang seru",
      "Pemandangan sungai Barito yang memesona"
    ],
    answer: "Pemandangan sungai Barito yang memesona",
    description: "Jembatan K.H Hasan Basri adalah jembatan ikonik yang menghubungkan Barito Utara dan Murung Raya, menawarkan pemandangan sungai Barito yang memesona.",
    answerImage: "img/jembatankhhasanbasri.png",
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
