const data = [
  { title: "Pengenalan", audio: "voices/profile/Intro.mp3", desc: "Halo! Biarkan aku memperkenalkan diriku. Namaku Topaz — aku bekerja di Departemen Investasi Strategis IPC. Aku sudah mendengar banyak tentang prestasi hebat The Nameless dan Astral Express — sangat senang bertemu denganmu. Oh, hehe, dan ini adalah bawahan kecilku — Numby! Katakan hai ke semua orang, Numby!" },
  { title: "Menyapa", audio: "voices/profile/menyapa.mp3", desc: "Lama tak jumpa! Bagaimana kabarmu? Banyak lembur ya?" },
  { title: "Berpisah", audio: "voices/profile/berpisah.mp3", desc: "Ugh, kenapa mereka harus memanggilku untuk hal sepele seperti ini ... Maaf, ada urusan yang mendesak di tempat kerja, aku harus pergi sekarang!" },
  { title: "Tentang Diriku: Kampung Halaman", audio: "voices/profile/kampung.mp3", desc: "Eh, lirik lagu itu bagaimana ya kalimatnya? 'Tempat yang tak bisa kau datangi kembali disebut rumah.' Yah, mungkin terdengar dramatis, tapi sebenarnya, aku memang sudah lama tidak pulang ke rumah ... dan sejujurnya, aku memang tidak ingin pulang." },
  { title: "Tentang Diriku: Pekerjaan", audio: "voices/profile/pekerjaan.mp3", desc: "Melindungi kepentingan sebagian besar orang adalah alasan mengapa aku memilih jalur karier ini. IPC telah memberiku platform yang sangat baik untuk mengejar tujuanku ... dan untuk itu, aku tidak memiliki alasan untuk mengeluh." },
  { title: "Mengobrol: Tempat kerja", audio: "voices/profile/kerja.mp3", desc: "Ada begitu banyak trik untuk berurusan dengan orang di tempat kerja yang bahkan tidak bisa kusebutkan semuanya. Tetapi aku selalu percaya bahwa bagian yang terpenting adalah tetap tulus — baik itu dengan rekan kerja atau dengan klien. Itu adalah prinsip dasarku." },
  { title: "Hobi: Bekerja", audio: "voices/profile/bekerja.mp3", desc: "Sekarang sudah tahun berapa? Siapa yang masih bekerja hanya untuk uang? Uang adalah sarana, bukan tujuan. Kerja seharusnya membuatmu bahagia ... itulah prinsip paling mendasar." },
  { title: "Hobi: Hewan Kecil", audio: "voices/profile/pecintahewan.mp3", desc: "Langit yang luas penuh bintang, miliaran makhluk lucu dan ajaib .... Huff Kalaupun hanya untuk mereka, aku akan tetap bekerja keras." },
  { title: "Hal yang Memusingkan", audio: "voices/profile/memusingkan.mp3", desc: "Masalah jika terlalu mahir dalam matematika adalah, semua orang memperlakukanmu seperti kalkulator manusia. Jadi ya, itulah mengapa aku jarang mengungkap tentang keahlianku di bidang itu." },
  { title: "Curhat", audio: "voices/profile/curhat.mp3", desc: "Dulu aku berpikir makhluk dari ekosistem yang berbeda tidak akan mampu hidup bersama, jadi aku membagi rumahku menjadi beberapa zona ekologis yang berbeda, tapi sekarang ... lihat! Lihat betapa harmonisnya kedua makhluk ini! Mereka jelas berasal dari planet yang berbeda, tapi sekarang mereka sahabat karib! Keren ya!?" },
  { title: "Rumor", audio: "voices/profile/rumor.mp3", desc: "Setiap keluarga memiliki masalahnya sendiri, ini aku mengerti. Tapi jika semua orang berhenti membayar utang mereka, seluruh sistem akan runtuh. Jika saat itu tiba, apa yang dulu dianggap sebagai masalah kecil akan menjadi kesulitan besar bagi dunia." },
  { title: "Tentang Numby", audio: "voices/profile/numby.mp3", desc: "Dia selalu suka dengan benda-benda berkilauan — koin emas, permata, apa saja. Dia seperti akun investasi besar yang mengumpulkan bunga ... Seharusnya aku memberinya nama 'Piggy'" },
  { title: "Tentang Aventurine", audio: "voices/profile/aventurine.mp3", desc: "Di IPC — tidak, hanya di Departemen Investasi Strategis — ada banyak orang yang tidak kusukai. Mereka mungkin rekan kerjaku, tapi kami berbeda. Ambil Aventurine sebagai contoh ... Aku sungguh berharap kamu tidak pernah harus berurusan dengannya." },
  { title: "Tentang Bronya", audio: "voices/profile/bronya.mp3", desc: "Supreme Guardian Belobog ... Ya, dia adalah seorang gadis kecil yang mengesankan dengan kedewasaan yang jauh melampaui usianya .... HAH? Kamu bilang aku seumuran dengannya? Tidak, tidak, tidak, keadaannya sangat berbeda. Tidak boleh membandingkannya ...." },
  { title: "Tentang Himeko", audio: "voices/profile/himeko.mp3", desc: "Aku pernah mendengar tentang Himeko dari Astral Express — rekan-rekanku menggosipkan tentang betapa cantik dan berpengetahuan luas dirinya. Jika aku ada kesempatan, aku ingin sekali bertemu dengannya." },
  { title: "Tentang Pom-Pom", audio: "voices/profile/pompom.mp3", desc: "Karakter paling misterius di Astral Express adalah si kondektur — yang tampak seperti makhluk kecil .... Reputasinya sudah terdengar sebelumnya. Kalau dia semenarik rumor yang disebutkan, suatu saat nanti aku harus bertemu dengan dia! Dan semoga saja, aku bisa mengelus dia juga!" },
  { title: "Tentang Asta", audio: "voices/profile/asta.mp3", desc: "Nona Asta! Dia adalah nona besar sejati yang pernah kulihat. Kamu tidak akan bisa menebak seberapa kaya dia sebenarnya!" },
  { title: "Tentang Stellaron Hunter", audio: "voices/profile/sh.mp3", desc: "Stellaron Hunter? Aku tidak kenal dengan mereka. Tidak pernah bekerja sama dengan mereka dalam proyek apa pun. Katanya orang-orang itu sulit dihubungi, tapi mereka memiliki catatan kredit yang ternyata cukup bagus — Yang lebih kuhargai daripada teori konspirasi tanpa dasar. "},
  { title: "Tentang Jade", audio: "voices/profile/jade.mp3", desc: "Lady Jade bagaikan bangsawan bagiku, cantik dan cakap. Ia selalu baik hati dan bersedia membimbing serta mendukung generasi muda! Ketika aku mengingat saat pertama kali bertemu dengannya, aku masih merasa gugup... Waktu memang cepat berlalu. "}
];

const wrapper = document.getElementById("profile");

data.forEach(item => {
  const div = document.createElement("div");
  div.className = "intro-col";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <audio controls>
      <source src="${item.audio}" type="audio/mpeg">
      Browser tidak mendukung audio ini.
    </audio>
    <p>${item.desc}</p>
  `;
  wrapper.appendChild(div);
});

// COMMUNICATE //
const data2 = [
  { title: "Satu Tim dengan Asta", audio: "voices/komunikasi/topazastatim.mp3", desc: "Nona Asta! Bagaimana kabar ibumu? Kita harus lebih sering bertemu!"},
  { title: "Satu Tim dengan Bronya", audio: "voices/komunikasi/topazbronyatim.mp3", desc: "Apa kabar, Bronya? Ingat untuk beristirahat — jangan meniruku."},
  { title: "Satu Tim dengan Himeko", audio: "voices/komunikasi/topazhimekotim.mp3", desc: "Himeko! Aku yakin aku bisa belajar banyak darimu."},
  { title: "Satu Tim dengan Aventurine", audio: "voices/komunikasi/topazaventim.mp3", desc: "Sepertinya kita bekerja sama dalam hal ini... "},
  { title: "Satu Tim dengan Jade", audio: "voices/komunikasi/topazjadetim.mp3", desc: "Serahkan saja padaku, Nyonya Jade."}
]

const wrapper2 = document.getElementById("communicate");

data2.forEach(item => {
  const div = document.createElement("div");
  div.className = "intro-col";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <audio controls>
      <source src="${item.audio}" type="audio/mpeg">
      Browser tidak mendukung audio ini.
    </audio>
    <p>${item.desc}</p>
  `;
  wrapper2.appendChild(div);
});


// GRINDING //
const data3 = [
  { title: "Membuka Peti", audio: "voices/grinding/topazchest1.mp3", desc: "Kerja keras berbuah hasil~"},
  { title: "Membuka Peti Berharga", audio: "voices/grinding/topazchest2.mp3", desc: "Sedikit tambahan untuk bonus triwulanan!"},
  { title: "Menyelesaikan Puzzle 1", audio: "voices/grinding/topazpuzzle.mp3", desc: "Cuma tes kecil saja."},
  { title: "Menyelesaikan Puzzle 2", audio: "voices/grinding/topazpuzzle2.mp3", desc: "Ini juga merupakan bagian dari pekerjaan."}
]

const wrapper3 = document.getElementById("grind");

data3.forEach(item => {
  const div = document.createElement("div");
  div.className = "intro-col";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <audio controls>
      <source src="${item.audio}" type="audio/mpeg">
      Browser tidak mendukung audio ini.
    </audio>
    <p>${item.desc}</p>
  `;
  wrapper3.appendChild(div);
});

// UPGRADE //
const data4 = [
  { title: "Membuka Ascension", audio: "voices/upgrade/topazascen.mp3", desc: "Keren! Ayo kita nikmati!"},
  { title: "Karakter Max", audio: "voices/upgrade/topazmax.mp3", desc: "Jangan berpuas diri — investor yang baik selalu berpikir jangka panjang."},
  { title: "Meningkatkan Trace", audio: "voices/upgrade/topaztrace.mp3", desc: "Bagus untuk dimiliki dalam portofolio."},
  { title: "Membuka Eidolon", audio: "voices/upgrade/topazeidolon.mp3", desc: "Tampak optimis! Itulah sebabnya kita harus tetap tenang."}
]

const wrapper4 = document.getElementById("tingkatkan");

data4.forEach(item => {
  const div = document.createElement("div");
  div.className = "intro-col";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <audio controls>
      <source src="${item.audio}" type="audio/mpeg">
      Browser tidak mendukung audio ini.
    </audio>
    <p>${item.desc}</p>
  `;
  wrapper4.appendChild(div);
});

// BATTLE //
const data5 = [
  { title: "Basic ATK", audio: "voices/battle/topazba.mp3", desc: "Masih belum bayar utang juga?" },
  { title: "Skill Voice 1", audio: "voices/battle/topazskill1.mp3", desc: "Hancurkan mereka, Numby!" },
  { title: "Skill Voice 2", audio: "voices/battle/topazskill2.mp3", desc: "Likuidasi!" },
  { title: "Skill setelah Peningkatan Voice 1", audio: "voices/battle/topazskill3.mp3", desc: "Jangan lupa bunganya!" },
  { title: "Skill setelah Peningkatan Voice 2", audio: "voices/battle/topazskill4.mp3", desc: "Aset disita!" },
  { title: "Ultimate: diaktifkan", audio: "voices/battle/topazulti.mp3", desc: "Pasarnya tidak bisa diprediksi ...." },
  { title: "Ultimate: dilepaskan", audio: "voices/battle/topazulti2.mp3", desc: "Hah? Benar! Berinvestasi pada kemenangan ... berarti bermain untuk jangka panjang!" },
  { title: "Topaz Turn Voice 1", audio: "voices/battle/topazturn.mp3", desc: "Harus tahu risikonya ...." },
  { title: "Topaz Turn Voice 2", audio: "voices/battle/topazturn2.mp3", desc: "Mari mulai evaluasi aset." },
  { title: "Topaz Menunggu Voice 1", audio: "voices/battle/topazturn3.mp3", desc: "Santai, Numby! Santai~" },
  { title: "Topaz Menunggu Voice 2", audio: "voices/battle/topazturn4.mp3", desc: "Pasar selalu berfluktuasi. Lakukanlah kapan saja saat kamu siap~" },
  { title: "Topaz Menarget Lawan", audio: "voices/battle/topaztarget.mp3", desc: "Hei, kamu! Waktunya untuk memeriksa buku keuanganmu." },
  { title: "Topaz Memberikan Weakness Break", audio: "voices/battle/topazbreak.mp3", desc: "Ini pasar yang sedang naik." },
  { title: "Topaz Terkena Hit Light ATK", audio: "voices/battle/topazkenahitkecil.mp3", desc: "Tetap tenang ...." },
  { title: "Topaz Terkena Hit Heavy ATK", audio: "voices/battle/topazkenahitgede.mp3", desc: "Lebih baik memotong kerugian kita ...." },
  { title: "Topaz diberi Heal", audio: "voices/battle/topazdiheal.mp3", desc: "Keuntungan yang cukup oke~" },
  { title: "Topaz Gugur", audio: "voices/battle/topazkalah.mp3", desc: "Belum mengajukan ... izin cuti ...." },
  { title: "Topaz Dibangkitkan Kembali", audio: "voices/battle/topazrevive.mp3", desc: "Hoam ... Waktunya lembur." },
  { title: "Topaz Menang", audio: "voices/battle/topazmenang.mp3", desc: "Proyek selesai!" }
];

const wrapper5 = document.getElementById("tempur");

data5.forEach(item => {
  const div = document.createElement("div");
  div.className = "intro-col";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <audio controls>
      <source src="${item.audio}" type="audio/mpeg">
      Browser tidak mendukung audio ini.
    </audio>
    <p>${item.desc}</p>
  `;
  wrapper5.appendChild(div);
});
