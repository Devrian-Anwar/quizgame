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

const descriptionContainer = document.getElementById("Description-container");

const descriptionImage = document.getElementById("description-image");
const descriptionImage2 = document.getElementById("description-image2");
const descriptionImage3 = document.getElementById("description-image3");
const descriptionImage4 = document.getElementById("description-image4");
const descriptionImage5 = document.getElementById("description-image5");
const descriptionDaerah = document.getElementById("description-daerah");
const descriptionTempat = document.getElementById("description-tempat");
const descriptionTempat2 = document.getElementById("description-tempat2");
const descriptionTempat3 = document.getElementById("description-tempat3");
const descriptionTempat4 = document.getElementById("description-tempat4");
const descriptionTempat5 = document.getElementById("description-tempat5");
const descriptionText = document.getElementById("description-text");
const descriptionText2 = document.getElementById("description-text2");
const descriptionText3 = document.getElementById("description-text3");
const descriptionText4 = document.getElementById("description-text4");
const descriptionText5 = document.getElementById("description-text5");

let currentQuestionIndex = 0;
let score = 0;
let isPopupVisible = false;
const questions = [
  {
    // 1
    question: "Siapakah pendiri Istana Kuning di Kotawaringin Barat?",
    image: "img/istanakuning.jpg",
    options: ["Pangeran Ratu Indra Kencana", "Pangeran Ratu Immanudin", "Pangeran Ratu Kutaringin", "Pangeran Ratu Pangkalan Bun"],
    answer: "Pangeran Ratu Immanudin",
    description: "Istana Kuning didirikan pada tahun 1860 oleh Pangeran Ratu Immanudin.",
    answerImage: "img/istanakuning.jpg",
  },
  {
    // 2
    question: "Apa yang membuat Taman Nasional Tanjung Puting terkenal?",
    image: "img/tanjungputing.jpg",
    options: ["Konservasi Harimau", "Konservasi Orangutan", "Konservasi Gajah", "Konservasi Macan Tutul"],
    answer: "Konservasi Orangutan",
    description: "Taman nasional tanjung puting terkenal dengan konservasi orangutannya.",
    answerImage: "img/tanjungputing.jpg",
  },
  {
    // 3
    question: "Di mana letak Pantai Kubu?",
    image: "img/pantaikubu.jpg",
    options: ["Desa Kubu", "Desa Keraya", "Desa Kumai", "Desa Pangkalan Bun"],
    answer: "Desa Kubu",
    description: "Pantai Kubu adalah tempat wisata pantai yang terletak di desa kubu",
    answerImage: "img/pantaikubu.jpg",
  },
  {
    // 4
    question: "Apa tujuan dibangunnya Tugu Palagan Sambi?",
    image: "img/palagansambi.jpeg",
    options: ["Memperingati persitiwa Desa Keraya", "Merayakan kemenangan militer", "Menghormati para pahlawan gugur", "Meningkatkan pariwisata lokal"],
    answer: "Menghormati para pahlawan gugur",
    description: "Monumen ini dibangun untuk menghormati dan mengenang jasa para pahlawan yang telah gugur dalam memperjuangkan Kemerdekaan Indonesia",
    answerImage: "img/palagansambi.jpeg",
  },
  {
    // 5
    question: "Di mana lokasi Pantai Keraya?",
    image: "img/pantaikeraya.jpg",
    options: ["Desa Keraya", "Desa Kubu", "Desa Kumai", "Desa Pangkalan Bun"],
    answer: "Desa Keraya",
    description: "Pantai Keraya adalah tempat wisata pantai yang terletak di desa Keraya",
    answerImage: "img/pantaikeraya.jpg",
  },
  // {
  //   // 6
  //   question: "Bukit Batu terkenal dengan apa?",
  //   image: "img/bukitbatu.jpeg",
  //   options: ["Pantainya Yang Indah", "Batu-Batu Granit Besar", "Sungai Yang Jernih", "Hutan Pinus"],
  //   answer: "Batu-Batu Granit Besar",
  //   description: "Bukit Batu berada di Kabupaten Katingan dan dikenal dengan pemandangan alamnya yang indah serta batu-batu granit besar. ",
  //   answerImage: "img/bukitbatu.jpeg",
  // },
  // {
  //   question: "Desa Tumbang Malahoi mempertahankan budaya suku apa?",
  //   image: "img/tumbangmalahoi.jpg",
  //   options: ["Dayak Ngaju", "Dayak Kenyah", "Dayak Iban", "Dayak Bidayuh"],
  //   answer: "Dayak Ngaju",
  //   description: "Desa ini mempertahankan budaya Dayak Ngaju yang autentik dengan rumah betang (rumah panjang) dan berbagai ritual adat. ",
  //   answerImage: "img/tumbangmalahoi.jpg",
  // },
  // {
  //   question: "Air Terjun Tosah terletak di kabupaten mana?",
  //   image: "img/airterjuntosah.jpg",
  //   options: ["Murung Raya", "Gunung Mas", "Barito Selatan", "Kapuas"],
  //   answer: "Gunung Mas",
  //   description: "Terletak di Kabupaten Gunung Mas, Air Terjun Tosah menawarkan pemandangan alam yang indah dengan aliran air yang deras dan kolam alami yang jernih",
  //   answerImage: "img/airterjuntosah.jpg",
  // },
  // {
  //   question: "Apa aktivitas populer di Bukit Tangkiling?",
  //   image: "img/bukittangkiling.jpg",
  //   options: ["Berenang", "Mendaki", "Bersepeda", "Snorkeling"],
  //   answer: "Mendaki",
  //   description: "Bukit Tangkiling adalah salah satu destinasi wisata populer di Palangka Raya dengan bukit-bukit batu granit yang menawarkan tempat yang baik untuk mendaki dan menikmati pemandangan kota dari ketinggian.",
  //   answerImage: "img/bukittangkiling.jpg",
  // },
  // {
  //   question: "Apa yang bisa ditemukan di Museum Balanga?",
  //   image: "img/museumbalanga.jpg",
  //   options: ["Koleksi artefak budaya dan sejarah", "Koleksi flora dan fauna", "Koleksi seni modern", "Koleksi kerajinan tangan kontemporer"],
  //   answer: "Koleksi artefak budaya dan sejarah",
  //   description: "Museum Balanga terletak di Palangka Raya dan menyimpan berbagai koleksi artefak yang mencerminkan budaya dan sejarah masyarakat Dayak serta suku-suku lain di Kalimantan Tengah.",
  //   answerImage: "img/museumbalanga.jpg",
  // },
];

function showLandingPage() {
  landingPage.style.display = "";
  studyPage.style.display = "none";
  quizPage.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
}

function showDescription(Daerah) {
  const descriptions = {
    Mura: {
      daerah: "Murung Raya",

      tempat: "1. Air Terjun Tosah",
      text: "Terletak di Kabupaten Murung Raya, Air Terjun Tosah menawarkan pemandangan alam yang indah dengan aliran air yang deras dan kolam alami yang jernih, cocok untuk berenang dan berendam.",
      image: "img/airterjuntosah.jpg",

      image2: "img/tamansapan.jpeg",
      tempat2: "2. Taman Sapan",
      text2: "Taman Sapan adalah tempat rekreasi dan edukasi di Murung Raya. Taman ini dikerjakan dengan pengerjaan sistem tahun jamak yang dimulai pemancangan tiang pertama pada 6 Oktober 2022.",

      image3: "img/gunungusung.jpg",
      tempat3: "3. Gunung Usung",
      text3: "Gunung Usung memiliki ketinggian sekitar 1.346 meter di atas permukaan laut dan menawarkan pemandangan alam yang menakjubkan serta udara yang segar dan sejuk.",

      image4: "img/jembatanmerdeka.jpg",
      tempat4: "4. Jembatan Merdeka",
      text4:
        "Jembatan Merdeka adalah sebuah jembatan yang melintang di atas Sungai Barito, Kabupaten Murung Raya, Kalimantan Tengah, Indonesia. Jembatan ini menghubungkan Puruk Cahu, ibu kota Murung Raya dengan daerah-daerah lain dari arah Muara Teweh dan Kalimantan Selatan.",

      image5: "img/airterjunbumbun.jpg",
      tempat5: "5. Air Terjun Bumbun",
      text5: "Air Terjun Bumbun adalah air terjun 7 tingkat dengan aliran air yang lumayan deras. Ketinggiannya beragam, yang paling tinggi sekitar 20 meter",
    },

    Kobar: {
      daerah: "Kotawaringin Barat",

      tempat: "1. Istana Kuning",
      text: "Istana Kuning, atau juga dikenal dengan nama Istana Indrasari Bukit Indra Kencana, adalah bangunan bersejarah yang didirikan pada tahun 1860 oleh Pangeran Ratu Immanudin dari Kerajaan Kutaringin. Lokasinya berada di jantung Pangkalan Bun, Kotawaringin Barat, Kalimantan Tengah.",
      image: "img/istanakuning.jpg",

      tempat2: "2. Taman Nasional Tanjung Puting",
      text2:
        "Taman Nasional Tanjung Puting terkenal dengan konservasi orangutannya. Taman ini memiliki hutan tropis yang luas dan berbagai satwa liar seperti bekantan, buaya, dan burung-burung eksotis. Pengunjung dapat mengikuti tur perahu di sungai untuk melihat orangutan di habitat alaminya.",
      image2: "img/tanjungputing.jpg",

      tempat3: "3. Pantai Kubu",
      text3:
        "Pantai Kubu adalah tempat wisata pantai yang terletak di desa Kubu, kecamatan Kumai, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Pantai ini memiliki pasir putih dan pemandangan yang indah, serta menjadi tempat favorit bagi wisatawan setempat.",
      image3: "img/pantaikubu.jpg",

      tempat4: "4. Tugu Palagan Sambi",
      text4:
        "Monumen Palgan Sambi adalah monumen bersejarah yang berdiri di Pangkalan Bun, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Monumen ini dibangun untuk menghormati dan mengenang jasa para pahlawan yang telah gugur dalam memperjuangkan Kemerdekaan Indonesia.",
      image4: "img/palagansambi.jpeg",

      tempat5: "5. Pantai Keraya",
      text5:
        "Pantai Keraya adalah tempat wisata pantai yang terletak di desa Keraya, kecamatan Kumai, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Pantai ini memiliki pasir putih dan pemandangan yang indah, serta menjadi tempat favorit bagi wisatawan setempat.",
      image5: "img/pantaikeraya.jpg",
    },
    Lamandau: {
      daerah: "Lamandau",

      tempat: "1. Riam Bahu Burung",
      text: "Riam Bahu Burung adalah tempat wisata di Kalimantan yang menawarkan keindahan alam yang luar biasa. Untuk menikmati keindahannya, pengunjung harus menghadapi tantangan akses yang sulit dijangkau. Nama Bahu Burung diberikan karena dari kejauhan atau dari tempat tinggi, kawasan ini tampak seperti bahu burung. Pengunjung dapat memverifikasi bentuk tersebut dengan naik ke bukit terdekat. Selain itu, ada mata air di puncak desa yang bisa dijelajahi meskipun medannya sulit. Akses ke Riam Bahu Burung bisa melalui dua jalur: sungai dan darat. Jalur darat memakan waktu sekitar 3 jam, sementara jalur sungai bisa memakan waktu hingga 5 jam, bahkan dengan menggunakan motor. Namun, usaha keras untuk mencapai tempat ini akan terbayar dengan pemandangan yang mempesona.",
      image: "img/riambahuburung.png",

      tempat2: "2. Bukit Sebayan",
      text2:
        "Bukit Sebayan di Lamandau adalah destinasi wisata unik yang menawarkan pengalaman baru dengan nuansa magis. Tempat ini dipercaya sebagai surga bagi orang yang meninggal menurut agama Kaharingan yang dianut oleh masyarakat Dayak Tomun. Wisatawan akan ditemani oleh pemandu yang memahami aturan di Bukit Sebayan. Selain nilai spiritualnya, Bukit Sebayan juga dikenal karena keindahannya, dengan berbagai bunga seperti bunga sebayan dan hutan yang masih asri dan terawat. Perjalanan menuju Bukit Sebayan memakan waktu sekitar 3,5 jam dari ibu kota.",
      image2: "img/bukitsebayan.png",

      tempat3: "3. Air Terjun Palikodan",
      text3:
        "Air Terjun Palikodan di Landau adalah destinasi wisata yang ideal untuk pecinta olahraga arung jeram. Air terjun ini memiliki air yang sangat jernih dengan aliran yang cukup deras, menjadikannya tempat populer untuk bermain arung jeram. Mengajak teman untuk bermain bersama di sini juga dianjurkan untuk melatih kekompakan.",
      image3: "img/airterjunpalikodan.png",

      tempat4: "4. Batu Batungkat",
      text4:
        "Batu Batungkat adalah batu besar yang menyerupai buritan kapal dan merupakan bagian dari legenda lokal. Menurut cerita, batu ini adalah bagian dari kapal seseorang yang dikutuk menjadi batu. Keunikan dari wisata ini adalah pengunjung diharuskan menggunakan tongkat saat naik ke atas batu untuk menghindari kutukan.",
      image4: "img/batubatungkat.png",

      tempat5: "5. Air Terjun Sukam",
      text5:
        "Air Terjun Sukam adalah destinasi wisata yang memiliki 37 tingkat air terjun dan mata air yang jernih. Keindahan alam sekitar dan keasrian air terjun ini dapat menghilangkan rasa lelah pengunjung. Tempat ini terjaga kebersihannya dan menawarkan kenyamanan bagi para wisatawan.",
      image5: "img/airterjunsukam.png",
    },
    Sukamara: {
      daerah: "Sukamara",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Kotim: {
      daerah: "Kotawaringin Timur",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Seruyan: {
      daerah: "Seruyan",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Katingan: {
      daerah: "Katingan",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Gumas: {
      daerah: "Gunung Mas",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Palangkaraya: {
      daerah: "Palangkaraya",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Pulpis: {
      daerah: "Pulang Pisau",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Kapuas: {
      daerah: "Kapuas",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Barut: {
      daerah: "Barito Utara",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Barsel: {
      daerah: "Barito Selatan",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
    Bartim: {
      daerah: "Barito Timur",

      tempat: "1. ",
      text: "",
      image: "img/",

      tempat2: "2.",
      text2: "",
      image2: "img/",

      tempat3: "3.",
      text3: "",
      image3: "img/",

      tempat4: "4. ",
      text4: "",
      image4: "img/",

      tempat5: "5. ",
      text5: "",
      image5: "img/",
    },
  };

  const description = descriptions[Daerah];

  descriptionDaerah.textContent = descriptions[Daerah].daerah;

  descriptionTempat.textContent = descriptions[Daerah].tempat;
  descriptionTempat2.textContent = descriptions[Daerah].tempat2;
  descriptionTempat3.textContent = descriptions[Daerah].tempat3;
  descriptionTempat4.textContent = descriptions[Daerah].tempat4;
  descriptionTempat5.textContent = descriptions[Daerah].tempat5;

  descriptionText.textContent = descriptions[Daerah].text;
  descriptionText2.textContent = descriptions[Daerah].text2;
  descriptionText3.textContent = descriptions[Daerah].text3;
  descriptionText4.textContent = descriptions[Daerah].text4;
  descriptionText5.textContent = descriptions[Daerah].text5;

  descriptionImage.src = descriptions[Daerah].image;
  descriptionImage.alt = `Image of ${descriptions[Daerah].tempat}`;
  descriptionImage2.src = descriptions[Daerah].image2;
  descriptionImage2.alt = `Image of ${descriptions[Daerah].tempat2}`;
  descriptionImage3.src = descriptions[Daerah].image3;
  descriptionImage3.alt = `Image of ${descriptions[Daerah].tempat3}`;
  descriptionImage4.src = descriptions[Daerah].image4;
  descriptionImage4.alt = `Image of ${descriptions[Daerah].tempat4}`;
  descriptionImage5.src = descriptions[Daerah].image5;
  descriptionImage5.alt = `Image of ${descriptions[Daerah].tempat5}`;
}

function showStudyPage() {
  landingPage.style.display = "none";
  studyPage.style.display = "";
  quizPage.style.display = "none";
}

function showQuizPage() {
  landingPage.style.display = "none";
  studyPage.style.display = "none";
  quizPage.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-button');
    button.addEventListener('click', () => selectOption(option));
    optionsContainer.appendChild(button);
  });
}



function selectOption(selectedOption) {
  if (isPopupVisible) return;

  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score += 20;
    showPopup("Jawaban benar!", currentQuestion.answerImage, currentQuestion.description);
  } else {
    score -= 10;
    showPopup("Jawaban salah!", currentQuestion.answerImage, currentQuestion.description);
  }
  currentQuestionIndex++;
}

function showPopup(message, imageUrl, description) {
  isPopupVisible = true;
  popupMessage.textContent = message;
  popupImage.src = imageUrl;
  popupDescription.textContent = description;
  popupScore.textContent = `Skor sementara: ${score}`;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
  isPopupVisible = false;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalScorePopup();
  }
}

function showFinalScorePopup() {
  popupMessage.textContent = `Kuis selesai! Skor akhir Anda adalah: ${score}`;
  popupImage.src = "";
  popupDescription.textContent = "";
  popupScore.textContent = "";
  popup.style.display = "block";
  setTimeout(showLandingPage, 3000);
  let skoranda = document.getElementById("skoranda");
  skoranda.textContent = "Skor Terakhir Anda: " + score;
}

showLandingPage();
