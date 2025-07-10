// Configuration
const CONFIG = {
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp yang sebenarnya
  instagramHandle: "sruputin_official",
};

// Products data
const products = [
  {
    id: 1,
    name: "Es Susu Coklat Original",
    description:
      "Perpaduan sempurna susu segar dan coklat premium yang creamy dan menyegarkan",
    price: "Rp 15.000",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    popular: true,
  },
  {
    id: 2,
    name: "Es Susu Coklat Oreo",
    description:
      "Es susu coklat dengan topping oreo hancur yang memberikan tekstur renyah",
    price: "Rp 18.000",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    popular: true,
  },
  {
    id: 3,
    name: "Kopi Susu Gula Aren",
    description:
      "Kopi robusta pilihan dengan susu creamy dan gula aren asli yang manis alami",
    price: "Rp 16.000",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    popular: false,
  },
  {
    id: 4,
    name: "Kopi Susu Vanilla",
    description:
      "Kopi susu dengan aroma vanilla yang lembut dan rasa yang balance",
    price: "Rp 17.000",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    popular: false,
  },
  {
    id: 5,
    name: "Es Susu Coklat Malt",
    description:
      "Varian premium dengan tambahan malt yang memberikan rasa unik dan kaya",
    price: "Rp 20.000",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    popular: false,
  },
  {
    id: 6,
    name: "Kopi Susu Caramel",
    description:
      "Kombinasi kopi, susu, dan caramel yang manis dengan finishing yang smooth",
    price: "Rp 19.000",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    popular: true,
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    age: 23,
    location: "Jakarta",
    rating: 5,
    text: "Es susu coklat Sruputin ini beneran enak banget! Rasanya creamy dan tidak terlalu manis. Jadi favorit aku sekarang.",
    product: "Es Susu Coklat Original",
  },
  {
    id: 2,
    name: "Sari Dewi",
    age: 19,
    location: "Bandung",
    rating: 5,
    text: "Kopi susu gula arennya juara! Perfect balance antara kopi dan manisnya gula aren. Recommended banget!",
    product: "Kopi Susu Gula Aren",
  },
  {
    id: 3,
    name: "Rizky Maulana",
    age: 26,
    location: "Surabaya",
    rating: 5,
    text: "Pelayanannya cepat, rasanya konsisten, dan harganya affordable. Sruputin emang the best deh!",
    product: "Es Susu Coklat Oreo",
  },
  {
    id: 4,
    name: "Maya Sari",
    age: 21,
    location: "Yogyakarta",
    rating: 5,
    text: "Varian rasa yang banyak dan semuanya enak! Packaging-nya juga kece, cocok buat foto IG hehe",
    product: "Kopi Susu Vanilla",
  },
  {
    id: 5,
    name: "Dimas Aditya",
    age: 28,
    location: "Medan",
    rating: 5,
    text: "Udah langganan Sruputin dari awal buka. Kualitasnya selalu terjaga dan inovasinya terus berkembang!",
    product: "Es Susu Coklat Malt",
  },
];

// Global variables
let currentTestimonialIndex = 0;
let testimonialInterval;
let isInitialized = false;

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  if (!isInitialized) {
    initializeWebsite();
    isInitialized = true;
  }
});

// Initialize website with error handling
function initializeWebsite() {
  try {
    setupNavigation();
    loadProducts();
    loadTestimonials();
    startTestimonialSlider();
    setupScrollEffects();
    setupMobileEnhancements();

    // Show content after initialization
    document.body.classList.add("loaded");
  } catch (error) {
    console.error("Error initializing website:", error);
    // Fallback: still show content even if there's an error
    document.body.classList.add("loaded");
  }
}

// Navigation setup with proper error handling
function setupNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !navMenu) return;

  // Mobile menu toggle
  navToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isActive = navMenu.classList.contains("active");

    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", (!isActive).toString());
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");

      // Handle smooth scrolling
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Load products with error handling
function loadProducts() {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid) return;

  try {
    products.forEach((product) => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const stars =
    "★".repeat(Math.floor(product.rating)) + (product.rating % 1 ? "☆" : "");

  card.innerHTML = `
    <div class="product-image">
      ${product.popular ? '<div class="popular-badge">Populer</div>' : ""}
      <img src="${product.image}" alt="${
    product.name
  }" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE1NS44IDE0NC4yIDE1NS44IDIxNS44IDIwMCAyNjBDMjQ0LjIgMjE1LjggMjQ0LjIgMTQ0LjIgMjAwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'">
    </div>
    <div class="product-content">
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-text">${product.rating}</span>
      </div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-footer">
        <span class="product-price">${product.price}</span>
        <button class="btn btn-order" onclick="orderProduct('${product.name.replace(
          /'/g,
          "\\'"
        )}')">
          <i class="fab fa-whatsapp"></i>
          Pesan
        </button>
      </div>
    </div>
  `;

  return card;
}

// Load testimonials with error handling
function loadTestimonials() {
  const container = document.getElementById("testimonials-container");
  const dotsContainer = document.getElementById("slider-dots");

  if (!container || !dotsContainer) return;

  try {
    // Create testimonials track
    const track = document.createElement("div");
    track.className = "testimonials-track";
    track.id = "testimonials-track";

    testimonials.forEach((testimonial, index) => {
      const testimonialCard = createTestimonialCard(testimonial);
      track.appendChild(testimonialCard);

      // Create dot
      const dot = document.createElement("button");
      dot.className = `dot ${index === 0 ? "active" : ""}`;
      dot.onclick = () => goToTestimonial(index);
      dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
      dotsContainer.appendChild(dot);
    });

    container.appendChild(track);
  } catch (error) {
    console.error("Error loading testimonials:", error);
  }
}

// Create testimonial card
function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  const stars = Array(testimonial.rating)
    .fill('<i class="fas fa-star"></i>')
    .join("");

  card.innerHTML = `
    <div class="quote-icon">
      <i class="fas fa-quote-left"></i>
    </div>
    <div class="testimonial-rating">
      ${stars}
    </div>
    <p class="testimonial-text">"${testimonial.text}"</p>
    <div class="testimonial-author">
      <h4 class="author-name">${testimonial.name}</h4>
      <p class="author-info">${testimonial.age} tahun, ${testimonial.location}</p>
      <p class="author-product">${testimonial.product}</p>
    </div>
  `;

  return card;
}

// Testimonial slider functions with error handling
function startTestimonialSlider() {
  if (testimonials.length > 1) {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }
}

function stopTestimonialSlider() {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
}

function nextTestimonial() {
  if (testimonials.length > 0) {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialSlider();
  }
}

function prevTestimonial() {
  if (testimonials.length > 0) {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialSlider();
    stopTestimonialSlider();
    startTestimonialSlider();
  }
}

function goToTestimonial(index) {
  if (index >= 0 && index < testimonials.length) {
    currentTestimonialIndex = index;
    updateTestimonialSlider();
    stopTestimonialSlider();
    startTestimonialSlider();
  }
}

function updateTestimonialSlider() {
  const track = document.getElementById("testimonials-track");
  const dots = document.querySelectorAll(".dot");

  if (track) {
    track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
  }

  dots.forEach((dot, index) => {
    if (dot) {
      dot.classList.toggle("active", index === currentTestimonialIndex);
    }
  });
}

// WhatsApp functions with error handling
function orderWhatsApp() {
  const message = "Halo Sruputin! Saya tertarik dengan produk minuman kalian.";
  openWhatsApp(message);
}

function contactWhatsApp() {
  const message =
    "Halo Sruputin! Saya ingin bertanya tentang produk dan cara pemesanan.";
  openWhatsApp(message);
}

function orderProduct(productName) {
  const message = `Halo Sruputin! Saya ingin memesan ${productName}. Mohon info lebih lanjut untuk pemesanan.`;
  openWhatsApp(message);
}

function openWhatsApp(message) {
  try {
    const url = `https://wa.me/${
      CONFIG.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error opening WhatsApp:", error);
    alert("Maaf, terjadi kesalahan saat membuka WhatsApp. Silakan coba lagi.");
  }
}

// Instagram function
function openInstagram() {
  try {
    window.open(`https://instagram.com/${CONFIG.instagramHandle}`, "_blank");
  } catch (error) {
    console.error("Error opening Instagram:", error);
    alert("Maaf, terjadi kesalahan saat membuka Instagram. Silakan coba lagi.");
  }
}

// Scroll functions
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if (productsSection) {
    const offsetTop = productsSection.offsetTop - 70;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Setup scroll effects
function setupScrollEffects() {
  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(28, 25, 23, 0.98)";
      } else {
        navbar.style.background = "rgba(28, 25, 23, 0.95)";
      }
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".product-card, .testimonial-card, .contact-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Mobile enhancements
function setupMobileEnhancements() {
  // Handle orientation change
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      window.scrollTo(0, window.scrollY);
    }, 500);
  });

  // Touch swipe for testimonials
  let touchStartX = 0;
  let touchEndX = 0;
  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );

  if (testimonialsContainer) {
    testimonialsContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    testimonialsContainer.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      stopTestimonialSlider();
      if (diff > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
      startTestimonialSlider();
    }
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Reset mobile menu on resize
    if (window.innerWidth > 768) {
      const navMenu = document.getElementById("nav-menu");
      const navToggle = document.getElementById("nav-toggle");
      if (navMenu && navToggle) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  }, 250)
);

// Loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Error handling for images
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      e.target.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE1NS44IDE0NC4yIDE1NS44IDIxNS44IDIwMCAyNjBDMjQ0LjIgMjE1LjggMjQ0LjIgMTQ0LjIgMjAwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
      e.target.alt = "Gambar tidak dapat dimuat";
    }
  },
  true
);
