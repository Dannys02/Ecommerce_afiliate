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

document.addEventListener('click', (e) => {
  if (navbar && !navbar.contains(e.target) && !tombolMenu.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

const collectionBtn = document.querySelector('.tombol-home');
collectionBtn.addEventListener('click', () => {
  window.location.href = "#products"
});

// Search functionality
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
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
  const notification = document.createElement('div');
  notification.className = 'fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

const elements = document.querySelectorAll(".from-bottom");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));