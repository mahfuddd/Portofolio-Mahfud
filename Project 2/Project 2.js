/* ==========================
   Data gambar untuk galeri
========================== */
const galleryData = [
  { src: "Vidio Project 2/Vidio 1.mp4", title: "Bumper Opening" },
  { src: "Vidio Project 2/Vidio 2.mp4", title: "Bumper Opening" },
  { src: "Vidio Project 2/Vidio 3.mp4", title: "Bumper Opening" },
  { src: "Vidio Project 2/Vidio 4.mp4", title: "Dokumentasi Kegiatan" },
];

/* ==========================
   Generate gallery
========================== */
const gallery = document.getElementById("gallery");
galleryData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "project-item";
  div.onclick = () => openModal(index);

  const thumb = document.createElement("video");
  thumb.src = item.src;
  thumb.poster = item.poster;
  thumb.muted = true;
  thumb.playsInline = true;
  thumb.preload = "metadata";
  thumb.addEventListener("mouseenter", () => thumb.play());
  thumb.addEventListener("mouseleave", () => {
    thumb.pause();
    thumb.currentTime = 0;
  });

  div.appendChild(thumb);
  gallery.appendChild(div);
});

/* ==========================
   Modal
========================== */
const modal = document.getElementById("project-modal");
const modalContent = document.querySelector(".modal-content");
const modalTitle = document.getElementById("modal-title");

let currentIndex = 0;
let modalVideo;

/* Buka modal */
function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  showVideo(currentIndex);
}

/* Tutup modal */
function closeModal() {
  modal.style.display = "none";
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.remove();
  }
}

/* Ganti video di modal */
function showVideo(index) {
  const data = galleryData[index];

  // hapus video lama
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.remove();
  }

  // buat elemen video baru
  modalVideo = document.createElement("video");
  modalVideo.src = data.src;
  modalVideo.controls = true;
  modalVideo.poster = data.poster;
  modalVideo.autoplay = true;
  modalVideo.style.maxWidth = "100%";
  modalVideo.style.maxHeight = "70vh";
  modalVideo.style.borderRadius = "10px";
  modalVideo.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";

  modalContent.prepend(modalVideo);
  modalTitle.textContent = data.title;
}

/* Prev & Next */
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  showVideo(currentIndex);
}
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  showVideo(currentIndex);
}

/* Event tombol */
document.querySelector(".prev").addEventListener("click", prevImage);
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".modal-back").addEventListener("click", closeModal);

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
   Swipe gesture (tablet & android)
========================== */
let startX = 0;
modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
modal.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prevImage();
  else if (startX - endX > 50) nextImage();
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