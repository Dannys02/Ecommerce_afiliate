// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  document.body.classList.add("loading-active");
  
  setTimeout(() => {
    loader.style.opacity = "0";
    document.body.classList.remove("loading-active");
    setTimeout(() => loader.remove(), 400);
  }, 200);
});

// OFFLINE MODE
function checkConnection() {
  const errorPage = document.getElementById("errorPage");
  const mainBody = document.body;
  
  if (!navigator.onLine) {
    errorPage.classList.add("active");
    
    const semuaElemen = document.querySelectorAll("nav, section, footer");
    semuaElemen.forEach(el => el.style.display = "none");
  } else {
    errorPage.classList.remove("active");
    const semuaElemen = document.querySelectorAll("nav, section, footer");
    semuaElemen.forEach(el => el.style.display = "");
  }
}

// Jalankan saat load dan saat status koneksi berubah
window.addEventListener("load", checkConnection);
window.addEventListener("online", checkConnection);
window.addEventListener("offline", checkConnection);



const tombolMenu = document.getElementById('mobileMenuBtn');
const navbar = document.querySelector('.nav-menu');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');


tombolMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  lineOne.classList.toggle('active');
  lineTwo.classList.toggle('active');
  lineThree.classList.toggle('active');
});

const collectionBtn = document.querySelector('.tombol-home');
collectionBtn.addEventListener('click', () => {
  window.location.href = "#products"
});

// Cari produk via button
function filterProducts(category) {
  const products = document.querySelectorAll('.kartu-produk');
  const buttons = document.querySelectorAll('.tombol-filter');
  
  // Ganti status tombol aktif
  buttons.forEach(btn => {
    btn.classList.remove('aktif');
    if (btn.getAttribute('onclick').includes(category)) {
      btn.classList.add('aktif');
      noResultsMessage.style.display = "none";
    }
  });
  
  // Tampilkan / sembunyikan produk sesuai kategori
  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    if (category === 'semua' || productCategory === category) {
      product.parentElement.style.display = 'block'; // parent karena .from-bottom
    } else {
      product.parentElement.style.display = 'none';
    }
  });
}

// === FUNGSI PENCARIAN PRODUK ===
function cariProduk() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const query = input.value.toLowerCase().trim();
  const cards = document.querySelectorAll("#products .kartu-produk");
  const noResultsMessage = document.getElementById("noResultsMessage");
  
  let found = false;
  
  cards.forEach(card => {
    const title = card.querySelector(".judul-kartu").textContent.toLowerCase();
    const desc = card.querySelector(".deskripsi-kartu").textContent.toLowerCase();
    
    // jika query cocok dengan judul atau deskripsi (mirip sebagian)
    if (title.includes(query) || desc.includes(query)) {
      card.parentElement.style.display = ""; // tampilkan
      found = true;
    } else {
      card.parentElement.style.display = "none"; // sembunyikan
    }
  });
  
  // tampilkan pesan jika tidak ada hasil
  if (!found && query !== "") {
    noResultsMessage.style.display = "flex";
  } else {
    noResultsMessage.style.display = "none";
  }
}

// Ambil elemen input dan tombol silang
const searchInput = document.getElementById("searchInput");
const btnClear = document.getElementById("clearBtn");

// Tampilkan tombol silang hanya jika ada huruf di input
searchInput.addEventListener("input", () => {
  const hasText = searchInput.value.trim().length > 0;
  btnClear.style.display = hasText ? "flex" : "none";
});

// Saat tombol silang diklik: hapus semua teks di input secara instan
btnClear.addEventListener("click", () => {
  searchInput.value = "";
  btnClear.style.display = "none";
  searchInput.focus(); // fokuskan kembali ke input
});

// === EVENT KLIK TOMBOL CARI ===
document.getElementById("searchBtn").addEventListener("click", function() {
  cariProduk();
});

// === TEKAN ENTER UNTUK MENCARI ===
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault(); // cegah reload form
    cariProduk();
  }
});

// Contact Products
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formKontak");
  const tombolWa = document.getElementById("tombolWa");
  const tombolEmail = document.getElementById("tombolEmail");
  
  const nomorWA = "6285645837298";
  const emailTujuan = "danis.samsunga01@gmail.com";
  
  function ambilDataForm() {
    return {
      nama: document.getElementById("nama").value.trim(),
      email: document.getElementById("email").value.trim(),
      subjek: document.getElementById("subjek").value.trim(),
      pesan: document.getElementById("pesan").value.trim(),
    };
  }
  
  function validasi(data) {
    return data.nama && data.email && data.subjek && data.pesan;
  }
  
  // 🔹 Fungsi buat tampilkan modal sukses
  function tampilkanModalSukses(teks = "Pesan berhasil dikirim!") {
    // Buat elemen container modal
    const modal = document.createElement("div");
    modal.className = "modal-sukses";
    
    // Isi modal (ikon + teks)
    modal.innerHTML = `
      <div class="isi-modal">
        <div class="ikon-sukses">
          <i class="fas fa-check-circle"></i>
        </div>
        <p class="teks-sukses">${teks}</p>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Tambahkan animasi zoom-in
    setTimeout(() => {
      modal.classList.add("tampil");
    }, 10);
    
    // Hapus otomatis setelah 3 detik
    setTimeout(() => {
      modal.classList.remove("tampil");
      setTimeout(() => modal.remove(), 300);
    }, 3000);
  }
  
  // === Tombol WhatsApp ===
  tombolWa.addEventListener("click", (e) => {
    e.preventDefault();
    const data = ambilDataForm();
    
    if (!validasi(data)) {
      alert("Mohon lengkapi semua input sebelum mengirim pesan!");
      return;
    }
    
    const teksPesan = `Halo CoolStyle! 👋%0A%0A` +
      `Nama: ${data.nama}%0A` +
      `Email: ${data.email}%0A` +
      `Topik: ${data.subjek}%0A%0A` +
      `Pesan:%0A${data.pesan}%0A%0A` +
      `Dikirim dari Form Kontak Website CoolStyle`;
    
    const waURL = `https://wa.me/${nomorWA}?text=${teksPesan}`;
    window.open(waURL, "_blank");
    
    tampilkanModalSukses();
    form.reset();
  });
  
  // === Tombol Email ===
  tombolEmail.addEventListener("click", (e) => {
    e.preventDefault();
    const data = ambilDataForm();
    
    if (!validasi(data)) {
      alert("Mohon lengkapi semua input sebelum mengirim email!");
      return;
    }
    
    const subject = encodeURIComponent(`Pesan dari ${data.nama} - ${data.subjek}`);
    const body = encodeURIComponent(
      `Nama: ${data.nama}\nEmail: ${data.email}\nTopik: ${data.subjek}\n\nPesan:\n${data.pesan}`
    );
    
    const mailtoURL = `mailto:${emailTujuan}?subject=${subject}&body=${body}`;
    // window.location.href = mailtoURL;
    
    tampilkanModalSukses("Email berhasil disiapkan!");
    form.reset();
  });
});


// Animasi fade in top
const elements = document.querySelectorAll(".from-bottom");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0 });
elements.forEach(el => observer.observe(el));