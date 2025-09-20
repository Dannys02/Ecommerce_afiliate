// Products data
// const products = [
// {
//   id: 1,
//   name: "Charizard VMAX Rainbow",
//   category: "pokemon",
//   price: "Rp 2.500.000",
//   image: "https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=Charizard+VMAX",
//   description: "Card Pokemon legendaris dengan holographic effect",
//   rarity: "Secret Rare"
// },
// {
//   id: 2,
//   name: "Blue-Eyes Ultimate Dragon",
//   category: "yugioh",
//   price: "Rp 1.800.000",
//   image: "https://via.placeholder.com/300x400/4ECDC4/FFFFFF?text=Blue-Eyes+Ultimate",
//   description: "Fusion monster ikonik dari Yu-Gi-Oh",
//   rarity: "Ultra Rare"
// },
// {
//   id: 3,
//   name: "Black Lotus Alpha",
//   category: "mtg",
//   price: "Rp 15.000.000",
//   image: "https://via.placeholder.com/300x400/45B7D1/FFFFFF?text=Black+Lotus",
//   description: "Kartu Magic paling berharga sepanjang masa",
//   rarity: "Power Nine"
// },
// {
//   id: 4,
//   name: "Pikachu Illustrator Promo",
//   category: "pokemon",
//   price: "Rp 8.500.000",
//   image: "https://via.placeholder.com/300x400/F7DC6F/000000?text=Pikachu+Promo",
//   description: "Kartu promo ultra langka tahun 1998",
//   rarity: "Promo"
// },
// {
//   id: 5,
//   name: "Dark Magician Girl",
//   category: "yugioh",
//   price: "Rp 750.000",
//   image: "https://via.placeholder.com/300x400/BB8FCE/FFFFFF?text=Dark+Magician+Girl",
//   description: "Spellcaster favorit dengan artwork premium",
//   rarity: "Super Rare"
// },
// {
//   id: 6,
//   name: "Mox Pearl Vintage",
//   category: "mtg",
//   price: "Rp 5.200.000",
//   image: "https://via.placeholder.com/300x400/E8DAEF/000000?text=Mox+Pearl",
//   description: "Artifact kuat dari set Unlimited",
//   rarity: "Rare"
// },
// {
//   id: 7,
//   name: "Logan Paul Charizard",
//   category: "limited",
//   price: "Rp 12.000.000",
//   image: "https://via.placeholder.com/300x400/FF9FF3/FFFFFF?text=Logan+Paul+Charizard",
//   description: "Base Set 1st Edition PSA 10",
//   rarity: "PSA 10"
// },
// {
//   id: 8,
//   name: "Exodia The Forbidden One",
//   category: "yugioh",
//   price: "Rp 3.500.000",
//   image: "https://via.placeholder.com/300x400/F4D03F/000000?text=Exodia",
//   description: "Complete set Exodia parts",
//   rarity: "Ultra Rare"
// },
// {
//   id: 9,
//   name: "Shining Gyarados Neo",
//   category: "pokemon",
//   price: "Rp 4.200.000",
//   image: "https://via.placeholder.com/300x400/58D68D/FFFFFF?text=Shining+Gyarados",
//   description: "Shining Pokemon dari Neo Revelation",
//   rarity: "Shining"
// },
// {
//   id: 10,
//   name: "Time Walk Beta",
//   category: "mtg",
//   price: "Rp 7.800.000",
//   image: "https://via.placeholder.com/300x400/AED6F1/000000?text=Time+Walk",
//   description: "Extra turn spell dari Beta set",
//   rarity: "Power Nine"
// },
// {
//   id: 11,
//   name: "Shadowless Alakazam",
//   category: "pokemon",
//   price: "Rp 1.200.000",
//   image: "https://via.placeholder.com/300x400/D7BDE2/FFFFFF?text=Shadowless+Alakazam",
//   description: "Base Set Shadowless Holo Rare",
//   rarity: "Holo Rare"
// },
// {
//   id: 12,
//   name: "Red-Eyes B. Dragon LOB",
//   category: "yugioh",
//   price: "Rp 950.000",
//   image: "https://via.placeholder.com/300x400/EC7063/FFFFFF?text=Red-Eyes+Dragon",
//   description: "Legend of Blue Eyes 1st Edition",
//   rarity: "Ultra Rare"
// }];

// // DOM Elements
// const searchInput = document.getElementById('searchInput');
// const productsGrid = document.getElementById('productsGrid');
// const darkModeToggle = document.getElementById('darkModeToggle');
// const mobileMenuBtn = document.getElementById('mobileMenuBtn');
// const mobileMenu = document.getElementById('mobileMenu');
// const contactForm = document.getElementById('contactForm');
// const whatsappBtn = document.getElementById('whatsappBtn');
// const emailBtn = document.getElementById('emailBtn');

// // Initialize
// document.addEventListener('DOMContentLoaded', function() {
//   displayProducts(products);
//   initializeDarkMode();
// });

// // Display products
// function displayProducts(productsToShow) {
//   productsGrid.innerHTML = '';

//   productsToShow.forEach((product, index) => {
//     const productCard = createProductCard(product, index);
//     productsGrid.appendChild(productCard);
//   });
// }

// // Create product card
// function createProductCard(product, index) {
//   const card = document.createElement('div');
//   card.className = `product-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 animate-fade-in`;
//   card.style.animationDelay = `${index * 0.1}s`;
//   card.dataset.category = product.category;
//   card.dataset.name = product.name.toLowerCase();

//   card.innerHTML = `
//             <div class="relative overflow-hidden">
//                 <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
//                 <div class="absolute top-4 right-4">
//                     <span class="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
//                         ${product.rarity}
//                     </span>
//                 </div>
//             </div>

//             <div class="p-6">
//                 <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${product.name}</h3>
//                 <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${product.description}</p>

//                 <div class="flex items-center justify-between mb-4">
//                     <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">${product.price}</span>
//                     <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
//                         ${product.category.toUpperCase()}
//                     </span>
//                 </div>

//                 <div class="flex gap-2">
//                     <button onclick="contactProduct('${product.name}', '${product.price}')" 
//                             class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
//                         Pesan Sekarang
//                     </button>
//                     <button onclick="addToWishlist(${product.id})" 
//                             class="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
//                         <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         `;

//   return card;
// }

// // Filter products
// function filterProducts(category) {
//   const filterBtns = document.querySelectorAll('.filter-btn');
//   filterBtns.forEach(btn => {
//     btn.classList.remove('active', 'bg-blue-600', 'text-white');
//     btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
//   });

//   event.target.classList.add('active', 'bg-blue-600', 'text-white');
//   event.target.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

//   const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
//   displayProducts(filteredProducts);
// }

// function filterProducts(category) {
//   const cards = document.querySelectorAll('.product-card');
//   cards.forEach(card => {
//     if (category === 'all' || card.dataset.category === category) {
//       card.classList.remove('hidden');
//     } else {
//       card.classList.add('hidden');
//     }
//   });
// }


// Search functionality
searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

// Dark mode functionality
function initializeDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
}

darkModeToggle.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');
  const isDarkMode = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDarkMode);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

// Contact product
function contactProduct(productName, price) {
  const message = `Halo! Saya tertarik dengan produk ${productName} seharga ${price}. Bisakah Anda memberikan informasi lebih lanjut?`;
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Add to wishlist
function addToWishlist(productId) {
  // In a real app, this would save to database
  alert('Produk berhasil ditambahkan ke wishlist!');
}

// Contact form handling
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  handleWhatsAppContact();
});

whatsappBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handleWhatsAppContact();
});

emailBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handleEmailContact();
});

function handleWhatsAppContact() {
  if (validateForm()) {
    const formData = getFormData();
    const message = `*Pesan dari Website CardShop*\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telepon: ${formData.phone}\n` +
      `Subjek: ${formData.subject}\n\n` +
      `Pesan:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    showSuccessMessage('Pesan berhasil dikirim via WhatsApp!');
    resetForm();
  }
}

function handleEmailContact() {
  if (validateForm()) {
    const formData = getFormData();
    const subject = `CardShop: ${formData.subject}`;
    const body = `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telepon: ${formData.phone}\n\n` +
      `Pesan:\n${formData.message}`;

    const emailUrl = `mailto:admin@cardshop.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;

    showSuccessMessage('Email client telah dibuka!');
    resetForm();
  }
}

function validateForm() {
  const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
  let isValid = true;

  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
    }
  });

  if (!isValid) {
    alert('Mohon lengkapi semua field yang diperlukan!');
  }

  return isValid;
}

function getFormData() {
  return {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
}

function resetForm() {
  contactForm.reset();
}

function showSuccessMessage(message) {
  // Create and show success notification
  const notification = document.createElement('div');
  notification.className = 'fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('backdrop-blur-xl');
  } else {
    nav.classList.remove('backdrop-blur-xl');
  }
});