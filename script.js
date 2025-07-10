// Configuration
const CONFIG = {
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp yang sebenarnya
  instagramHandle: "sruputin_official",
}

// Products data
const products = [
  {
    id: 1,
    name: "Es Susu Coklat Original",
    description: "Perpaduan sempurna susu segar dan coklat premium yang creamy dan menyegarkan",
    price: "Rp 15.000",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    popular: true,
  },
  {
    id: 2,
    name: "Es Susu Coklat Oreo",
    description: "Es susu coklat dengan topping oreo hancur yang memberikan tekstur renyah",
    price: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    popular: true,
  },
  {
    id: 3,
    name: "Kopi Susu Gula Aren",
    description: "Kopi robusta pilihan dengan susu creamy dan gula aren asli yang manis alami",
    price: "Rp 16.000",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    popular: false,
  },
  {
    id: 4,
    name: "Kopi Susu Vanilla",
    description: "Kopi susu dengan aroma vanilla yang lembut dan rasa yang balance",
    price: "Rp 17.000",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    popular: false,
  },
  {
    id: 5,
    name: "Es Susu Coklat Malt",
    description: "Varian premium dengan tambahan malt yang memberikan rasa unik dan kaya",
    price: "Rp 20.000",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    popular: false,
  },
  {
    id: 6,
    name: "Kopi Susu Caramel",
    description: "Kombinasi kopi, susu, dan caramel yang manis dengan finishing yang smooth",
    price: "Rp 19.000",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    popular: true,
  },
]

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
]

// Global variables
let currentTestimonialIndex = 0
let testimonialInterval

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeWebsite()
})

// Initialize website
function initializeWebsite() {
  setupNavigation()
  loadProducts()
  loadTestimonials()
  startTestimonialSlider()
  setupScrollEffects()
}

// Navigation setup
function setupNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Load products
function loadProducts() {
  const productsGrid = document.getElementById("products-grid")

  products.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  const stars = "★".repeat(Math.floor(product.rating)) + (product.rating % 1 ? "☆" : "")

  card.innerHTML = `
        <div class="product-image">
            ${product.popular ? '<div class="popular-badge">Populer</div>' : ""}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
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
                <button class="btn btn-order" onclick="orderProduct('${product.name}')">
                    <i class="fab fa-whatsapp"></i>
                    Pesan
                </button>
            </div>
        </div>
    `

  return card
}

// Load testimonials
function loadTestimonials() {
  const container = document.getElementById("testimonials-container")
  const dotsContainer = document.getElementById("slider-dots")

  // Create testimonials track
  const track = document.createElement("div")
  track.className = "testimonials-track"
  track.id = "testimonials-track"

  testimonials.forEach((testimonial, index) => {
    const testimonialCard = createTestimonialCard(testimonial)
    track.appendChild(testimonialCard)

    // Create dot
    const dot = document.createElement("div")
    dot.className = `dot ${index === 0 ? "active" : ""}`
    dot.onclick = () => goToTestimonial(index)
    dotsContainer.appendChild(dot)
  })

  container.appendChild(track)
}

// Create testimonial card
function createTestimonialCard(testimonial) {
  const card = document.createElement("div")
  card.className = "testimonial-card"

  const stars = "★".repeat(testimonial.rating)

  card.innerHTML = `
        <div class="quote-icon">
            <i class="fas fa-quote-left"></i>
        </div>
        <div class="testimonial-rating">
            ${stars
              .split("")
              .map((star) => `<i class="fas fa-star"></i>`)
              .join("")}
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
            <h4 class="author-name">${testimonial.name}</h4>
            <p class="author-info">${testimonial.age} tahun, ${testimonial.location}</p>
            <p class="author-product">${testimonial.product}</p>
        </div>
    `

  return card
}

// Testimonial slider functions
function startTestimonialSlider() {
  testimonialInterval = setInterval(nextTestimonial, 5000)
}

function stopTestimonialSlider() {
  clearInterval(testimonialInterval)
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length
  updateTestimonialSlider()
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
  updateTestimonialSlider()
  stopTestimonialSlider()
  startTestimonialSlider()
}

function goToTestimonial(index) {
  currentTestimonialIndex = index
  updateTestimonialSlider()
  stopTestimonialSlider()
  startTestimonialSlider()
}

function updateTestimonialSlider() {
  const track = document.getElementById("testimonials-track")
  const dots = document.querySelectorAll(".dot")

  if (track) {
    track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`
  }

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonialIndex)
  })
}

// WhatsApp functions
function orderWhatsApp() {
  const message = "Halo Sruputin! Saya tertarik dengan produk minuman kalian."
  openWhatsApp(message)
}

function contactWhatsApp() {
  const message = "Halo Sruputin! Saya ingin bertanya tentang produk dan cara pemesanan."
  openWhatsApp(message)
}

function orderProduct(productName) {
  const message = `Halo Sruputin! Saya ingin memesan ${productName}. Mohon info lebih lanjut untuk pemesanan.`
  openWhatsApp(message)
}

function openWhatsApp(message) {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// Instagram function
function openInstagram() {
  window.open(`https://instagram.com/${CONFIG.instagramHandle}`, "_blank")
}

// Scroll functions
function scrollToProducts() {
  const productsSection = document.getElementById("products")
  const offsetTop = productsSection.offsetTop - 70
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  })
}

// Setup scroll effects
function setupScrollEffects() {
  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(28, 25, 23, 0.98)"
    } else {
      navbar.style.background = "rgba(28, 25, 23, 0.95)"
    }
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".product-card, .testimonial-card, .contact-card")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Reset mobile menu on resize
    if (window.innerWidth > 768) {
      const navMenu = document.getElementById("nav-menu")
      const navToggle = document.getElementById("nav-toggle")
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  }, 250),
)

// Prevent right-click on images (optional)
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault()
  }
})

// Loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
