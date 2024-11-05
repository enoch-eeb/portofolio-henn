window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Toggle menu untuk mobile
document.querySelector('.toggle-menu').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});

// JavaScript for sticky header
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// JavaScript for dark mode toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '🌞';
}

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Add smooth transition for theme toggle
document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';

//slideshow
document.addEventListener('DOMContentLoaded', function() {
  let slideshowContainers = document.getElementsByClassName("slideshow-container");
  let slideIndex = new Array(slideshowContainers.length).fill(1);

  function showSlides(n, slideshowIndex) {
      let slides = slideshowContainers[slideshowIndex].getElementsByClassName("mySlides");
      let dots = slideshowContainers[slideshowIndex].getElementsByClassName("dot");
      
      if (n > slides.length) {
          slideIndex[slideshowIndex] = 1;
      }
      if (n < 1) {
          slideIndex[slideshowIndex] = slides.length;
      }
      
      // Sembunyikan semua slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      // Hapus kelas active dari semua dots
      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      // Tampilkan slide yang aktif
      slides[slideIndex[slideshowIndex] - 1].style.display = "block";
      dots[slideIndex[slideshowIndex] - 1].className += " active";
  }

  function plusSlides(n, slideshowIndex) {
      showSlides(slideIndex[slideshowIndex] += n, slideshowIndex);
  }

  function currentSlide(n, slideshowIndex) {
      showSlides(slideIndex[slideshowIndex] = n, slideshowIndex);
  }

  // Inisialisasi semua slideshow
  for (let i = 0; i < slideshowContainers.length; i++) {
      showSlides(1, i);
      
      // Auto slideshow
      setInterval(() => {
          plusSlides(1, i);
      }, 8000);
  }

  // Buat fungsi-fungsi tersedia secara global
  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  // Tambahkan event listener untuk tombol prev/next
  document.querySelectorAll('.prev, .next').forEach((button, index) => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const direction = this.classList.contains('prev') ? -1 : 1;
          const slideshowIndex = Math.floor(index / 2); // Karena ada 2 tombol per slideshow
          plusSlides(direction, slideshowIndex);
      });
  });

  // Tambahkan event listener untuk dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.addEventListener('click', function() {
          const slideshowIndex = Math.floor(index / 8); // Sesuaikan dengan jumlah dots per slideshow
          currentSlide(index % 3 + 1, slideshowIndex);
      });
  });
});

// Tambahkan event listener untuk animasi saat page load
window.addEventListener('load', function() {
  const profileContent = document.querySelector('.profile-content');

  // Trigger the fade-in effect
  profileContent.style.opacity = '1';
  profileContent.style.transform = 'translateY(0)';
});

const titles = ["Data Engineer", "Web Developer", "NLP Engineer"];
let index = 0;

function typeTitle(title, callback) {
  const titleElement = document.getElementById("dynamic-title");
  titleElement.textContent = ""; // Clear previous title
  let i = 0;

  function type() {
    if (i < title.length) {
      titleElement.textContent += title.charAt(i);
      i++;
      setTimeout(type, 100); // Adjust typing speed here
    } else {
      setTimeout(callback, 1000); // Pause before calling the callback
    }
  }
  
  type();
}

function changeTitle() {
  const nextTitle = titles[index];
  index = (index + 1) % titles.length; // Cycle through titles
  typeTitle(nextTitle, changeTitle);
}

// Start the typing effect
changeTitle();

document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements
  const projectsTitle = document.querySelector('.projects h2');
  const projectItems = document.querySelectorAll('.project-item');
  
  projectsTitle.classList.add('animate-on-scroll');
  projectItems.forEach(item => {
      item.classList.add('animate-on-scroll');
  });

  // Initialize Intersection Observer
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          // Remove previous animation classes
          entry.target.classList.remove('is-visible', 'is-hidden');
          
          // Force reflow to reset animation
          void entry.target.offsetWidth;
          
          if (entry.isIntersecting) {
              // Add visible animation when element enters viewport
              entry.target.classList.add('is-visible');
          } else {
              // Add hidden animation when element leaves viewport
              if (entry.boundingClientRect.top > 0) {
                  // Only animate if scrolling up
                  entry.target.classList.add('is-hidden');
              }
          }
      });
  }, options);

  // Observe elements
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Tambahkan kelas animate saat element masuk viewport
              entry.target.classList.add('animate');
          } else {
              // Hapus kelas animate saat element keluar viewport
              entry.target.classList.remove('animate');
          }
      });
  }, {
      threshold: 0.1, // Trigger ketika 10% element terlihat
      rootMargin: '-50px' // Memberikan margin agar timing lebih tepat
  });

  // Mengamati section resume
  const resumeSection = document.querySelector('.resume');
  if (resumeSection) {
      observer.observe(resumeSection);
  }
});

