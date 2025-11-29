/* ==========================
   Data gambar untuk galeri
========================== */
const galleryData = [
  { src: "Image Project 1/Foto1-1.webp", title: "Website Portofolio" },
];

/* ==========================
   Generate gallery
========================== */
const gallery = document.getElementById("gallery");
galleryData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "project-item";
  div.onclick = () => openModal(index);

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;
  img.loading = "lazy";

  div.appendChild(img);
  gallery.appendChild(div);
});

/* ==========================
   Modal
========================== */
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  showImage(currentIndex);
}

function closeModal() {
  modal.style.display = "none";
}

function showImage(index) {
  const data = galleryData[index];
  modalImg.classList.remove("show");
  setTimeout(() => {
    modalImg.src = data.src;
    modalTitle.textContent = data.title;
    modalImg.classList.add("show");
  }, 150);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  showImage(currentIndex);
}

/* ==========================
   Scroll reveal
========================== */
const fadeSections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeSections.forEach((section) => observer.observe(section));

/* ==========================
   Tombol prev/next
========================== */
document.querySelector(".prev").addEventListener("click", prevImage);
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".modal-back").addEventListener("click", closeModal);

/* ==========================
   Swipe gesture (tablet & android)
========================== */
let startX = 0;
modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
modal.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    // swipe kanan
    prevImage();
  } else if (startX - endX > 50) {
    // swipe kiri
    nextImage();
  }
});

/* ==========================
   Zoom in/out gambar (desktop)
========================== */
let zoomed = false;
modalImg.addEventListener("dblclick", () => {
  if (!zoomed) {
    modalImg.style.transform = "scale(2)";
    modalImg.style.cursor = "zoom-out";
  } else {
    modalImg.style.transform = "scale(1)";
    modalImg.style.cursor = "zoom-in";
  }
  zoomed = !zoomed;
});

/* ==========================
   Tilt Hover Effect
========================== */
VanillaTilt.init(document.querySelectorAll(".project-card, .profile"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});

/* ==========================
   Smooth Scroll + Scrollspy
========================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ==========================
   Auto Footer Year
========================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================
   Scroll Progress Bar
========================== */
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  requestAnimationFrame(updateProgressBar);
}
updateProgressBar();

/* ==========================
   Animated Timeline Line
========================== */
const educationSection = document.getElementById("education");
const timelineLine = document.querySelector(".timeline-line");