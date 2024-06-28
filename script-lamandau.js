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
    question: "Mengapa Riam Bahu Burung dinamakan demikian?",
    image: "img/riambahuburung.png",
    options: [
      "Karena terdapat burung langka di sekitarnya",
      "Karena terdapat banyak burung hantu",
      "Karena dari kejauhan tampak seperti bahu burung",
      "Karena terdapat patung burung raksasa"
    ],
    answer: "Karena dari kejauhan tampak seperti bahu burung",
    description: "Riam Bahu Burung dinamakan demikian karena dari kejauhan tampak seperti bentuk bahu burung.",
    answerImage: "img/riambahuburung.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Bukit Sebayan unik selain nilai spiritualnya?",
    image: "img/bukitsebayan.png",
    options: [
      "Keberadaan makam raja terkenal",
      "Nuansa magis yang kental",
      "Keberadaan bunga sebayan dan hutan asri",
      "Lokasi strategis di tengah kota"
    ],
    answer: "Keberadaan bunga sebayan dan hutan asri",
    description: "Bukit Sebayan unik karena keberadaan bunga sebayan dan hutan asri di sekitarnya, selain dari nilai spiritualnya.",
    answerImage: "img/bukitsebayan.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Air Terjun Palikodan populer di kalangan wisatawan?",
    image: "img/airterjunpalikodan.png",
    options: [
      "Keindahan alam sekitar yang terjaga",
      "Cocok untuk berjemur di sekitar air terjun",
      "Aliran air yang tenang dan jernih",
      "Tempat yang ideal untuk olahraga arung jeram"
    ],
    answer: "Tempat yang ideal untuk olahraga arung jeram",
    description: "Air Terjun Palikodan populer di kalangan wisatawan karena merupakan tempat yang ideal untuk olahraga arung jeram.",
    answerImage: "img/airterjunpalikodan.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Mengapa pengunjung diharuskan menggunakan tongkat saat naik ke atas Batu Batungkat?",
    image: "img/batubatungkat.png",
    options: [
      "Untuk menjaga kebersihan batu",
      "Untuk mengusir hewan liar",
      "Agar terhindar dari kutukan",
      "Agar tidak tergelincir"
    ],
    answer: "Agar terhindar dari kutukan",
    description: "Pengunjung diharuskan menggunakan tongkat saat naik ke atas Batu Batungkat agar terhindar dari kutukan yang diyakini oleh masyarakat lokal.",
    answerImage: "img/batubatungkat.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Berapa jumlah tingkat air terjun yang dimiliki Air Terjun Sukam?",
    image: "img/airterjunsukam.png",
    options: [
      "27 tingkat",
      "32 tingkat",
      "37 tingkat",
      "42 tingkat"
    ],
    answer: "37 tingkat",
    description: "Air Terjun Sukam memiliki 37 tingkat air terjun yang mempesona dan mata air yang jernih.",
    answerImage: "img/airterjunsukam.png",
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
