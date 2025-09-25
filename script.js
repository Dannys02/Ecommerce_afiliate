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

const elements = document.querySelector(".from-bottom");

// const ob]''