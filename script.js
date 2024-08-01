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

const descriptionSumberGambar = document.getElementById("description-sumbergambar");
const descriptionSumberGambar2 = document.getElementById("description-sumbergambar2");
const descriptionSumberGambar3 = document.getElementById("description-sumbergambar3");
const descriptionSumberGambar4 = document.getElementById("description-sumbergambar4");
const descriptionSumberGambar5 = document.getElementById("description-sumbergambar5");

const descriptionDaerah = document.getElementById("description-daerah");
const descriptionLokasi = document.getElementById("description-lokasi");
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
      
      lokasi: "https://maps.app.goo.gl/qX1iQPLu9VQeRJKa7",

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
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Tosah-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Taman-Sapan-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2021/03/Gunung-Usung.jpg",
      sumbergambar4: "https://www.metrokalteng.com/wp-content/uploads/2021/07/IMG_20210726_142631.jpg",
      sumbergambar5: "https://inspirasi.avonturin.id/wp-content/uploads/2022/03/Air-Terjun-Bumbun-di-Uut-Murung-Murung-Raya-Kalimantan-Tengah-Anto-Herry.jpg",
    },

    Kobar: {
      daerah: "Kotawaringin Barat",

      lokasi: "https://maps.app.goo.gl/mKp2jXRw436Rsxb37",

      tempat: "1. Istana Kuning",
      text: "Istana Kuning, atau juga dikenal dengan nama Istana Indrasari Bukit Indra Kencana, adalah bangunan bersejarah yang didirikan pada tahun 1860 oleh Pangeran Ratu Immanudin dari Kerajaan Kutaringin. Lokasinya berada di jantung Pangkalan Bun, Kotawaringin Barat, Kalimantan Tengah.",
      image: "img/istanakuning.jpg",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Istana-Kuning-2.jpg",


      tempat2: "2. Taman Nasional Tanjung Puting",
      text2:
        "Taman Nasional Tanjung Puting terkenal dengan konservasi orangutannya. Taman ini memiliki hutan tropis yang luas dan berbagai satwa liar seperti bekantan, buaya, dan burung-burung eksotis. Pengunjung dapat mengikuti tur perahu di sungai untuk melihat orangutan di habitat alaminya.",
      image2: "img/tanjungputing.jpg",
      sumbergambar2: "https://storage.googleapis.com/finansialku_media/wordpress_media/2020/05/414c8fb6-6-best-activities-to-do-in-the-home-of-the-largest-orangutan-population-on-earth-tanjung-puting-01-finansialku.jpg",


      tempat3: "3. Pantai Kubu",
      text3:
        "Pantai Kubu adalah tempat wisata pantai yang terletak di desa Kubu, kecamatan Kumai, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Pantai ini memiliki pasir putih dan pemandangan yang indah, serta menjadi tempat favorit bagi wisatawan setempat.",
      image3: "img/pantaikubu.jpg",
      sumbergambar3: "https://www.pantainesia.com/wp-content/uploads/2018/08/pantai-kubu-1024x576.jpg",


      tempat4: "4. Tugu Palagan Sambi",
      text4:
        "Monumen Palgan Sambi adalah monumen bersejarah yang berdiri di Pangkalan Bun, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Monumen ini dibangun untuk menghormati dan mengenang jasa para pahlawan yang telah gugur dalam memperjuangkan Kemerdekaan Indonesia.",
      image4: "img/palagansambi.jpeg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bundaran-Pancasila.jpg",



      tempat5: "5. Pantai Keraya",
      text5:
        "Pantai Keraya adalah tempat wisata pantai yang terletak di desa Keraya, kecamatan Kumai, Kabupaten Kotawaringin Barat, Kalimantan Tengah. Pantai ini memiliki pasir putih dan pemandangan yang indah, serta menjadi tempat favorit bagi wisatawan setempat.",
      image5: "img/pantaikeraya.jpg",
      sumbergambar5: "https://jadesta.kemenparekraf.go.id/imgpost/88631.jpg",

    },
    Lamandau: {
      daerah: "Lamandau",

      lokasi : "https://maps.app.goo.gl/Qj48Qqz1yeoSCqHq9",

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
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Riam-Bahu-Burung-di-Kecamatan-Bulik-Timur.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bukit-Sebayan.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Palikodan-Tambai-dan-Rohap-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Batu-Batongkat.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Sukam.jpg",
    },
    Sukamara: {
      daerah: "Sukamara",

      lokasi : "https://maps.app.goo.gl/dt5u7u6b659UHwBZA",

      tempat: "1. Danau Burung",
      text: "Di Sukamara, destinasi wisata yang wajib Anda kunjungi adalah Danau Burung. Di sini, Anda dapat menikmati panorama dan keindahan alam, serta melihat berbagai jenis burung migran yang singgah. Selain itu, hutan gambut yang menakjubkan juga dapat dinikmati dengan kicauan burung dan suara daun bergesekan yang menenangkan. Kawasan ini juga menawarkan kesempatan untuk melihat owa, orang utan, dan berbagai jenis ikan tawar, menjadikannya tempat yang sempurna bagi penggemar fotografi.",
      image: "img/danauburung.png",

      tempat2: "2. Bukit Patung",
      text2: "Di Sukamara, Bukit Patung adalah destinasi ekowisata yang menawarkan keindahan alam dan pesona air terjun. Tempat ini cocok bagi Anda yang ingin menikmati kesegaran air terjun dan kealamian lingkungan yang menyegarkan dari keramaian perkotaan. Bukit Patung juga menawarkan pengalaman bersama teman untuk menjalin keakraban sambil menikmati pemandangan perkebunan jeruk, rambutan, dan sawit di sekitarnya. Ideal untuk menghabiskan waktu bersama keluarga atau mengajak anak-anak belajar tentang alam dan tanaman.",
      image2: "img/bukitpatung.png",

      tempat3: "3. Pantai Kampung Baru",
      text3: "Pantai Kampung Baru adalah destinasi wisata yang menawarkan panorama pantai yang indah dengan angin laut yang sejuk dan pasir pantai yang hangat. Laut yang biru di Pantai Kampung Baru memanjakan mata, sementara aktivitas nelayan dan kehidupan perkampungan nelayan menambah pesona tempat ini. Cocok untuk dikunjungi bersama keluarga, tempat ini tidak akan membuat Anda bosan dengan pemandangan yang memikat dan popularitasnya di kalangan wisatawan lokal.",
      image3: "img/pantaikampungbaru.png",

      tempat4: "4. Pantai Kuala Jelai",
      text4: "Sukamara memiliki pantai yang menakjubkan, termasuk Pantai Kuala Jelai yang bersih dan terjaga. Cocok untuk liburan bersama keluarga atau teman, Anda dapat menikmati keindahan pantai ini dari pagi hingga senja, sambil mengabadikan momen indah bersama orang terkasih.",
      image4: "img/pantaikualajelai.png",

      tempat5: "5. Pantai Tanjung Nipah",
      text5: "Pantai Tanjung Nipah di Sukamara adalah destinasi populer yang telah direvitalisasi pada tahun 2008 untuk kenyamanan wisatawan. Terkenal dengan julukan Pantai Cemara karena pohon cemara yang melimpah, pantai ini ramai dikunjungi saat liburan dengan suasana ombak yang menenangkan. Anda dapat menikmati makanan lokal dan minuman segar sambil menikmati pemandangan mercusuar yang tersebar di sepanjang pantai.",
      image5: "img/pantaitanjungnipah.png",

      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Burung.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bukit-Patung-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Kampung-Baru-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Kuala-Jelai-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Tanjung-Nipah.jpg",
    },
    Kotim: {
      daerah: "Kotawaringin Timur",

      lokasi: "https://maps.app.goo.gl/keoZt4DRzBFkGpYx6",

      tempat: "1. Pantai Satiruk",
      text: "Untuk mencapai Pantai ini, Anda perlu perjalanan sekitar satu jam dengan kecepatan standar. Pantai ini memiliki pasir putih yang indah dan masih terjaga kealamian alamnya. Anda dapat menikmati berbagai wahana seperti klotok dan speed boat, meskipun sewanya cukup mahal karena lokasinya yang jarang dihuni.",
      image: "img/pantaisatiruk.png",

      tempat2: "2. Pantai Ujung Pandaran",
      text2: "Wisata ini berlokasi 80 km dari Sampit, dapat ditempuh sekitar 2 jam dengan kendaraan pribadi. Di pantai ini, Anda bisa menikmati pemandangan nelayan yang sibuk mencari ikan, terutama di malam hari. Ada banyak penginapan terjangkau di sekitar pantai, serta kuliner khas Sampit seperti ikan, udang, kerang, dan cumi yang lezat.",
      image2: "img/pantaiujungpandaran.png",

      tempat3: "3. Susur Sungai Mentaya Sampit",
      text3: "Di Kota Sampit, susur Sungai Mentaya adalah salah satu wisata yang menarik. Dengan berlayar menggunakan kapal kecil, Anda dapat menikmati keindahan kota dan pemandangan sekitar sungai. Anda juga bisa singgah di beberapa tempat lain seperti perkampungan dekat Patung Ikan Jelawat dan landasan pacu Bandara Haji Asan. Wisata susur sungai ini sangat populer di kalangan wisatawan domestik maupun mancanegara.",
      image3: "img/susursungaimentayasampit.png",

      tempat4: "4. Rumah Betang Tumbang Gagu",
      text4: "Situs sejarah yang memenangkan Penghargaan Anugerah Pesona Indonesia (API) pada 2017 ini menawarkan pemandangan yang luar biasa dan memiliki cerita sejarah yang panjang. Meskipun perjalanan dari kota memakan waktu sekitar 10 jam, keindahan alam yang masih alami di tempat ini sangat memuaskan dan menjadi daya tarik utama wisatawan.",
      image4: "img/rumahbetangtumbanggagu.png",

      tempat5: "5. Taman Miniatur Budaya Kotawaringin Timur",
      text5: "Pemerintah setempat mengelola Taman Miniatur Budaya Kotawaringin Timur di Jl. Pramuka dekat Kawasan Tugu Perdamaian. Meskipun disebut miniatur, taman ini menawarkan keindahan luas dan keragaman budaya Kotawaringin, termasuk rumah adat dan tempat ibadah. Selain sebagai tempat wisata, taman ini juga memberikan wawasan tentang Kotawaringin serta berkontribusi pada APBD daerah.",
      image5: "img/tamanminiaturbudayakotawaringintimur.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Satiruk-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2022/09/Daya-Tarik-Pantai-Ujung-Pandaran.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Susur-Sungai-Mentaya-Sampit-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Rumah-Betang-Tumbang-Gagu-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Taman-Miniatur-Budaya-Kotawaringin-Timur.jpg",
    },
    Seruyan: {
      daerah: "Seruyan",

      lokasi: "https://maps.app.goo.gl/Gkxyi1E95tR7q4Wp7",

      tempat: "1. Air Terjun Sahai Gantung",
      text: "Air Terjun Sahai Gantung adalah objek wisata populer dengan pemandangan asri dan pepohonan hijau yang menyejukkan. Keunikannya terletak pada debit air yang deras, yang juga berfungsi sebagai pembangkit listrik tenaga mikro hidro, cukup untuk menerangi beberapa kampung sekitar.",
      image: "img/airterjunsahaigantung.png",

      tempat2: "2. Air Terjun Suling Tambun",
      text2: "Air Terjun Suling Tambun di Seruyan adalah destinasi wisata yang menawarkan panorama indah dengan bebatuan unik dan air terjun bertingkat, menarik banyak pengunjung saat liburan. Keindahan bebatuan terjal dan pepohonan rimbun menjadikannya tempat yang wajib dikunjungi.",
      image2: "img/airterjunsulingtambun.png",

      tempat3: "3. Meriam Pengantin",
      text3: "Objek wisata Meriam Pengantin di Seruyan, dinamai karena dua meriam berdampingan seperti pengantin, adalah peninggalan dari era penjajahan Belanda. Tempat ini menjadi bukti sejarah pendudukan Belanda di daerah tersebut dan menarik untuk dikunjungi.",
      image3: "img/meriampengantin.png",

      tempat4: "4. Pantai Bakau",
      text4: "Pantai Bakau di Seruyan adalah destinasi wisata yang wajib dikunjungi saat liburan. Pantai ini menawarkan panorama mempesona dengan sekitar 1000 pohon cemara dan pohon bakau yang membelah pantai, menciptakan suasana eksotis bagi para pengunjung.",
      image4: "img/pantaibakau.png",

      tempat5: "5. Danau Sembuluh",
      text5: "Danau Sembuluh, destinasi wisata terbesar di Kalimantan, menawarkan panorama indah dengan pasir putih yang bersih. Sebagai muara beberapa sungai, danau ini menarik banyak pengunjung. Menikmati matahari terbenam di Danau Sembuluh adalah pengalaman yang sangat indah.",
      image5: "img/danausembuluh.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Sahai-Gantung-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Suling-Tambun-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Meriam-Pengantin-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Bakau-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Sembuluh-1.jpg",
    },
    Katingan: {
      daerah: "Katingan",

      lokasi: "https://maps.app.goo.gl/ZJqxegKT8rrv4bJn7",

      tempat: "1. Air Terjun Beruang",
      text: "Air Terjun Beruang di Kabupaten Katingan menawarkan keindahan alam pegunungan dengan mata air yang menyegarkan. Pemandangan asri dan kemudahan untuk mendaki gunung menjadikan tempat ini sangat menarik untuk dikunjungi.",
      image: "img/airterjunberuang.png",

      tempat2: "2. Bendungan Sungai Sala",
      text2: "Bendungan Sungai Sala adalah objek wisata populer untuk memancing dan menikmati aliran sungai yang tenang. Tempat ini cocok bagi penggemar memancing yang mencari pengalaman menyenangkan dan terjangkau.",
      image2: "img/bendungansungaisala.png",

      tempat3: "3. Air Terjun Habangoi",
      text3: "Air Terjun Habangoi di kawasan bukit raya menawarkan suasana pegunungan yang sejuk dan pemandangan alam yang masih alami. Suara gemericik air terjun menambah ketenangan di tempat ini.",
      image3: "img/airterjunhabangoi.png",

      tempat4: "4. Bukit Batu",
      text4: "Bukit Batu adalah objek wisata bersejarah di Katingan yang banyak dipilih pengunjung karena panorama indahnya. Tempat ini memiliki nilai historis sebagai tempat bersemedi pahlawan lokal.",
      image4: "img/bukitbatu.png",

      tempat5: "5. Bukit Bulan",
      text5: "Bukit Bulan di Taman Nasional Sabangau terkenal sebagai lokasi penangkaran lebah madu terbaik. Tempat ini menawarkan keindahan alam dan keragaman flora serta fauna yang menarik.",
      image5: "img/bukitbulan.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Beruang-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bendungan-Sungai-Sala.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2021/03/Air-Terjun-Habangoi.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2022/10/Daya-Tarik-Bukit-Batu-Tjilik-Riwut.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bukit-Bulan-1.jpg",
    },
    Gumas: {
      daerah: "Gunung Mas",
    
      lokasi: "https://maps.app.goo.gl/Qb8w9WbC1fify7iD7",

      tempat: "1. Batu Suli",
      text: "Terletak di antara desa Tumbang Manange dan Upon Batu, Batu Suli menawarkan pemandangan alam yang masih alami. Wisatawan dapat menikmati keunikan bentuk batu, melakukan panjat tebing, mendirikan tenda, dan memancing.",
      image: "img/batusuli.png",
    
      tempat2: "2. Batu Antang",
      text2: "Berseberangan dengan Batu Suli, Batu Antang memiliki nilai sakral dan digunakan untuk ritual. Wisatawan harus menaati aturan dan menjaga kesopanan. Batu ini merupakan cagar budaya penting.",
      image2: "img/batuantang.png",
    
      tempat3: "3. Monumen Tambun Bungai",
      text3: "Meskipun bukan wisata alam, monumen ini menampilkan tokoh legenda Dayak yang dihormati. Situs ini mengalami kerusakan, tetapi tetap menjadi daya tarik utama di Gunung Mas.",
      image3: "img/monumentambunbungai.png",
    
      tempat4: "4. Pegunungan Schwaner",
      text4: "Dikenal sebagai pegunungan tertinggi di Kalimantan, Pegunungan Schwaner menawarkan pemandangan matahari terbit dan terbenam yang memukau, serta panorama hutan yang menakjubkan.",
      image4: "img/pegununganschwaner.png",
    
      tempat5: "5. Puruk Sandukui",
      text5: "Ikon wisata Gunung Mas dengan ketinggian 250 meter. Bentuknya menyerupai jari telunjuk dan dianggap sebagai tempat peristirahatan kapal Nabi Nuh. Sulit didaki, tetapi menawarkan kesempatan untuk mempelajari sejarah suku Ot Danum di sekitarnya.",
      image5: "img/puruksandukui.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Batu-Suli-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Batu-Antang.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Monumen-Tambun-Bungai-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pegunungan-Schwaner.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Puruk-Sandukui-1.jpg",
    },
    Palangkaraya: {
      daerah: "Palangkaraya",

      lokasi: "https://maps.app.goo.gl/rrFGzZvKdN47KvRZ6",
    
      tempat: "1. Jembatan Kahayan",
      text: "Jembatan sepanjang 640 meter di Sungai Kahayan ini menghubungkan transportasi di Palangkaraya. Dengan arsitektur yang megah, jembatan ini menjadi daya tarik wisata, terutama saat matahari terbenam.",
      image: "img/jembatankahayan.png",
    
      tempat2: "2. Taman Wisata Kumkum",
      text2: "Berbeda dari taman biasa, Taman Wisata Kumkum di Palangkaraya menampilkan berbagai satwa khas Borneo. Suasana sejuk dan rindang menambah daya tarik tempat ini.",
      image2: "img/tamanwisatakumkum.png",
    
      tempat3: "3. Sungai Kahayan",
      text3: "Sungai terpanjang di Kalimantan ini menawarkan pemandangan indah dan kehidupan unik masyarakat Dayak yang bermukim di sekitarnya.",
      image3: "img/sungaikahayan.png",
    
      tempat4: "4. Kalawa Waterpark",
      text4: "Waterpark seluas 3 hektar ini menawarkan berbagai wahana seru seperti Kalawa Slide dan Lazy River, menjadikannya destinasi keluarga yang sempurna di Palangkaraya.",
      image4: "img/kalawawaterpark.png",
    
      tempat5: "5. Bukit Tangkiling",
      text5: "Dengan ketinggian 500 meter, Bukit Tangkiling menawarkan trekking, ziarah ke bukit biara pertapaan, dan udara segar. Cocok bagi yang ingin menikmati keindahan alam jauh dari polusi kota.",
      image5: "img/bukittangkiling.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Jembatan-Kahayan-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Taman-Wisata-Kumkum.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2022/09/Sekilas-Mengenai-Sungai-Kahayan-di-Palangkaraya.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Kalawa-Waterpark-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2022/09/Legenda-dari-Bukit-Tangkiling-yang-Perlu-Anda-Tahu.jpg",
      
    },
    Pulpis: {
      daerah: "Pulang Pisau",

      lokasi: "https://maps.app.goo.gl/o4Qedg6RZ6uGG1XCA",
    
      tempat: "1. Danau Lais",
      text: "Danau Lais di Pulang Pisau cocok untuk memancing dan menikmati keindahan alam. Lingkungan terjaga berkat kepedulian warga setempat.",
      image: "img/danaulais.png",
    
      tempat2: "2. Danau Begantung",
      text2: "Danau Begantung menawarkan keindahan dan kegiatan memancing. Wisatawan bisa menikmati danau dengan perahu sambil merasakan keramahan warga.",
      image2: "img/danaubegantung.png",
    
      tempat3: "3. Danau Batu",
      text3: "Danau Batu memikat dengan pemandangan indah dan budaya lokal yang terjaga. Pengunjung dapat menikmati alam sekaligus belajar budaya setempat.",
      image3: "img/danaubatu.png",
    
      tempat4: "4. Danau Sabuah",
      text4: "Danau Sabuah terkenal dengan keindahan alami dan fasilitas yang memadai. Tempat ini ideal untuk memancing dalam lingkungan yang bersih.",
      image4: "img/danausabuah.png",
    
      tempat5: "5. Pantai Sematan",
      text5: "Pantai Sematan di Pulang Pisau menawarkan panorama indah dan laut jernih. Cocok untuk liburan keluarga, terutama saat matahari terbenam.",
      image5: "img/pantaisematan.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Lais-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Begantung-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Batu-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Sabuah.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pantai-Sematan-1.jpg",
      
    },
    Kapuas: {
      daerah: "Kapuas",

      lokasi:"https://maps.app.goo.gl/LbqXDe52kNcaWj2SA",
    
      tempat: "1. Taman Kota Kapuas",
      text: "Taman Kota Kapuas adalah tempat wisata murah meriah dengan banyak spot foto. Cocok untuk berolahraga dan menikmati sore hari dengan keluarga.",
      image: "img/tamankotakapuas.png",
    
      tempat2: "2. Cafe Terapung",
      text2: "Cafe Terapung di Kuala Kapuas menawarkan makanan dengan suasana unik di atas Sungai Kapuas. Cocok untuk makan malam romantis atau santai bersama.",
      image2: "img/cafeterapung.png",
    
      tempat3: "3. Stadion Panunjung Tarung",
      text3: "Stadion Panunjung Tarung adalah tempat untuk menikmati pertandingan sepak bola lokal di Kuala Kapuas. Fasilitas lengkap untuk penonton dan pemain.",
      image3: "img/stadionpanunjungtarung.png",
    
      tempat4: "4. Pulau Telo",
      text4: "Pulau Telo menawarkan keasrian alam dan kehidupan masyarakat lokal. Cocok untuk menikmati kehidupan pulau dan pemandangan Sungai Kapuas.",
      image4: "img/pulautelo.png",
    
      tempat5: "5. Air Terjun Masupa",
      text5: "Air Terjun Masupa di desa Masupa adalah air terjun yang terjaga keasriannya. Cocok untuk bermain air dan menikmati alam yang masih alami di Kuala Kapuas.",
      image5: "img/airterjunmasupa.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Taman-Kota-Kapuas-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Cafe-Terapung-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Stadion-Panunjung-Tarung-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Pulau-Telo-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Masupa-1.jpg",
      
    },
    Barut: {
      daerah: "Barito Utara",

      lokasi: "https://maps.app.goo.gl/HF7rwyjuHoj9ua8UA",
    
      tempat: "1. Gunung Pararawen",
      text: "Gunung Pararawen menawarkan pesona alam yang luar biasa dengan hutan lebat dan sungai kecil yang jernih. Tempat ini juga menjadi habitat flora dan fauna liar.",
      image: "img/gunungpararawen.png",
    
      tempat2: "2. Bendungan Trinsing",
      text2: "Bendungan Trinsing di desa Trinsing cocok untuk berenang dan memancing. Dikelilingi pepohonan rindang, sering dimanfaatkan warga untuk beraktivitas air.",
      image2: "img/bendungantrinsing.png",
    
      tempat3: "3. Hutan Muara Teweh",
      text3: "Hutan Muara Teweh di desa Melayu memiliki kayu bakah yang unik karena dapat mengeluarkan air. Lokasi ini menawarkan petualangan menyeberangi sungai kecil.",
      image3: "img/hutanmuarateweh.png",
    
      tempat4: "4. Gunung Lumut",
      text4: "Gunung Lumut menawarkan pemandangan lumut yang luas di hutan alaminya. Tempat dikeramatkan oleh suku Dayak sebagai tempat arwah orang yang telah meninggal.",
      image4: "img/gununglumut.png",
    
      tempat5: "5. Jembatan K.H Hasan Basri",
      text5: "Jembatan K.H Hasan Basri adalah jembatan ikonik yang menghubungkan Barito Utara dan Murung Raya. Menawarkan pemandangan sungai Barito yang memesona.",
      image5: "img/jembatankhhasanbasri.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Gunung-Pararawen-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bendungan-Trinsing-1.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Hutan-Muara-Teweh-1.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Gunung-Lumut-1.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Jembatan-K.H-Hasan-Basri-1.jpg",
      
    },
    Barsel: {
      daerah: "Barito Selatan",

      lokasi: "https://maps.app.goo.gl/Lsa78icYzsAoCpYy5",
    
      tempat: "1. Danau Sadar",
      text: "Danau Sadar di Desa Sadar menawarkan pesona alam yang terjaga dengan baik, cocok untuk refreshing bersama keluarga atau rekan. Tempat ini ramai dikunjungi terutama di sore hari dengan udara sejuk dan pemandangan indah.",
      image: "img/danausadar.png",
    
      tempat2: "2. Taman Iring Witu",
      text2: "Taman Iring Witu adalah tempat kumpul favorit di Barito Selatan, dikelilingi oleh pohon dan bunga yang menambah keindahan. Suasana asri dan perahu yang melintas di sungai menjadikannya tempat santai yang sempurna.",
      image2: "img/tamaniringwitu.png",
    
      tempat3: "3. Danau Tahai",
      text3: "Danau Tahai adalah danau luas yang dikelilingi pepohonan rimbun dengan jembatan kayu yang memungkinkan pengunjung menikmati danau lebih dekat. Terdapat banyak gazebo untuk bersantai di pinggiran danau.",
      image3: "img/danautahai.png",
    
      tempat4: "4. Rumah Betang Nansarunai",
      text4: "Rumah Betang Nansarunai adalah rumah tradisional Suku Dayak yang kini dijadikan objek wisata. Terletak di tengah hutan, tempat ini menawarkan udara sejuk dan keindahan alam yang menenangkan pikiran.",
      image4: "img/rumahbetangnansarunai.png",
    
      tempat5: "5. Danau Sanggu",
      text5: "Danau Sanggu terkenal dengan keindahan alamnya yang memukau dan airnya yang jernih. Pengunjung dapat menikmati perahu atau menyewa sepeda air sambil menikmati udara sejuk di sekitar danau.",
      image5: "img/danausanggu.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Danau-Sadar-1.jpg",
      sumbergambar2: "https://cdn.idntimes.com/content-images/community/2021/10/infobuntok-clzrw0zfjde-899b59f0f65acad798d392c407f4ab92-bcd89ba75aa72f653c61633d9a0d9f0f.jpg",
      sumbergambar3: "https://cdn.idntimes.com/content-images/community/2021/10/seputaranplk-cf3vbkld-xc-899b59f0f65acad798d392c407f4ab92-8bd3f3735ff91645d08841041474ff82.jpg",
      sumbergambar4: "https://cdn.idntimes.com/content-images/community/2021/10/hartanto-ato-b9bdu5fh9vm-899b59f0f65acad798d392c407f4ab92-0f03358a74496771d7599dea03d334b5.jpg",
      sumbergambar5: "https://cdn.idntimes.com/content-images/community/2021/10/rifqikurniar-bmtrn6tjeiq-899b59f0f65acad798d392c407f4ab92-33fa119947fa9ce13b85b03d552a223e.jpg",
      
    }
    ,
    Bartim: {
      daerah: "Barito Timur",

      lokasi: "https://maps.app.goo.gl/iJCpxTVoB1nxkyFXA",
    
      tempat: "1. Air Terjun Kedong Air",
      text: "Air Terjun Kedong Air menawarkan gemercik air jernih di tengah pepohonan hijau subur. Tempat ini sangat populer untuk bermain air dan menikmati keindahan alam yang tak pernah surut.",
      image: "img/airterjunkedongair.png",
    
      tempat2: "2. Rumah Betang",
      text2: "Rumah Betang di Barito Timur adalah peninggalan sejarah Dayak yang kini menjadi tempat edukasi dengan museum benda bersejarah. Cocok untuk penggemar sejarah dan budaya Dayak.",
      image2: "img/rumahbetang.png",
    
      tempat3: "3. Museum Lewu Hante",
      text3: "Museum Lewu Hante adalah rumah panggung suku Dayak yang luas, menyimpan berbagai artefak bersejarah. Tempat ini sering digunakan untuk acara kebudayaan.",
      image3: "img/museumlewhante.png",
    
      tempat4: "4. Gua Liang Saragi",
      text4: "Gua Liang Saragi adalah gua yang mengalirkan air sungai bening. Pengunjung dapat menyewa perahu untuk menikmati pemandangan alam di dalam gua yang unik ini.",
      image4: "img/gualiangsaragi.png",
    
      tempat5: "5. Bendungan Tampa",
      text5: "Bendungan Tampa tidak hanya mengendalikan aliran sungai, tetapi juga menawarkan pemandangan hamparan sawah hijau yang luas. Tempat yang tepat untuk santai dan menikmati keindahan alam.",
      image5: "img/bendungantampa.png",
      sumbergambar: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Air-Terjun-Kedong-Air-1.jpg",
      sumbergambar2: "https://www.celebes.co/borneo/wp-content/uploads/2021/03/Rumah-Betang-Toyoi.jpg",
      sumbergambar3: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Museum-Lewu-Hante-2.jpg",
      sumbergambar4: "https://www.celebes.co/borneo/wp-content/uploads/2021/03/Gua-Liang-Saragi.jpg",
      sumbergambar5: "https://www.celebes.co/borneo/wp-content/uploads/2020/01/Bendungan-Tampa-1.jpg",
      
    }
    ,
  };

  const description = descriptions[Daerah];

  descriptionDaerah.textContent = descriptions[Daerah].daerah;
  descriptionLokasi.href = description.lokasi;
  descriptionLokasi.textContent = "Link Lokasi";

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

  descriptionSumberGambar.textContent = descriptions[Daerah].sumbergambar;
  descriptionSumberGambar2.textContent = descriptions[Daerah].sumbergambar2;
  descriptionSumberGambar3.textContent = descriptions[Daerah].sumbergambar3;
  descriptionSumberGambar4.textContent = descriptions[Daerah].sumbergambar4;
  descriptionSumberGambar5.textContent = descriptions[Daerah].sumbergambar5;

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

function showKapuas() {}
function showQuizPage() {
  landingPage.style.display = "none";
  studyPage.style.display = "none";
  quizPage.style.display = "";
  displayQuestion();
}
function showQuizPage2() {
  descriptionContainer.style.display = "none";
  studyPage.style.display = "none";
  quizPage.style.display = "";
  displayQuestion2();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", () => selectOption(option));
    optionsContainer.appendChild(optionElement);
  });
}
function displayQuestion2() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", () => selectOption(option));
    optionsContainer.appendChild(optionElement);
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
    displayQuestion();
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
