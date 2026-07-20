// 1.a. Array data produk (ditambahkan properti 'kategori' untuk fitur filter)
const produkData = [
  {
    nama: "Smartphone X",
    harga: "Rp 3.500.000",
    deskripsi: "Smartphone canggih dengan kamera 64MP.",
    gambar: "https://picsum.photos/200/150?random=1",
    kategori: "elektronik",
  },
  {
    nama: "Kaos Polos Cotton",
    harga: "Rp 85.000",
    deskripsi: "Bahan adem, nyaman dipakai sehari-hari.",
    gambar: "https://picsum.photos/200/150?random=2",
    kategori: "pakaian",
  },
  {
    nama: "Laptop Kerja Pro",
    harga: "Rp 8.500.000",
    deskripsi: "Performa cepat untuk multitasking dan kerja.",
    gambar: "https://picsum.photos/200/150?random=3",
    kategori: "elektronik",
  },
  {
    nama: "Jaket Bomber",
    harga: "Rp 250.000",
    deskripsi: "Jaket stylish tahan angin dan air tipis.",
    gambar: "https://picsum.photos/200/150?random=4",
    kategori: "pakaian",
  },
];

// 1.b. Fungsi untuk menampilkan produk menggunakan looping
function tampilkanProduk(produkArray) {
  const container = document.getElementById("daftar-produk");
  container.innerHTML = ""; // Bersihkan kontainer sebelum merender ulang

  produkArray.forEach((produk) => {
    // Membuat elemen card produk
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
                    <img src="${produk.gambar}" alt="${produk.nama}">
                    <h3>${produk.nama}</h3>
                    <p class="price">${produk.harga}</p>
                    <p class="desc">${produk.deskripsi}</p>
                `;

    container.appendChild(card);
  });
}

// 2. Fungsi filter sederhana berdasarkan kategori
function filterProduk(kategori) {
  // Mengatur active class pada tombol agar terlihat estetik
  const tombols = document.querySelectorAll(".btn-filter");
  tombols.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (kategori === "semua") {
    tampilkanProduk(produkData);
  } else {
    // Memfilter array berdasarkan kategori yang dipilih
    const hasilFilter = produkData.filter(
      (produk) => produk.kategori === kategori,
    );
    tampilkanProduk(hasilFilter);
  }
}

// Jalankan fungsi pertama kali untuk menampilkan semua produk saat halaman dimuat
tampilkanProduk(produkData);
