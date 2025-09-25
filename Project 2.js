// Data gambar untuk galeri
const galleryData = [
  { src: "assets/gallery1.jpg", title: "Banner Event", desc: "Desain banner untuk acara kampus." },
  { src: "assets/gallery2.jpg", title: "Logo Brand", desc: "Logo modern dengan gaya minimalis." },
  { src: "assets/gallery3.jpg", title: "Pamflet Promosi", desc: "Pamflet promosi untuk produk lokal." },
  { src: "assets/gallery4.jpg", title: "Social Media Post", desc: "Konten Instagram feed." },
  { src: "assets/gallery5.jpg", title: "Poster Musik", desc: "Poster event musik indie." },
  { src: "assets/gallery6.jpg", title: "Desain Merchandise", desc: "Desain untuk kaos komunitas." },
  { src: "assets/gallery7.jpg", title: "Flyer Bisnis", desc: "Flyer untuk startup kuliner." },
  { src: "assets/gallery8.jpg", title: "Poster Sekolah", desc: "Poster pengumuman sekolah." },
  { src: "assets/gallery9.jpg", title: "Mockup Branding", desc: "Mockup branding paket makanan." },
  { src: "assets/gallery10.jpg", title: "Desain UI", desc: "UI landing page sederhana." },
  { src: "assets/gallery11.jpg", title: "Infografis", desc: "Infografis data penelitian." },
  { src: "assets/gallery12.jpg", title: "Banner Digital", desc: "Banner promosi online shop." },
  { src: "assets/gallery13.jpg", title: "Pamflet Kegiatan", desc: "Pamflet kegiatan sekolah." },
  { src: "assets/gallery14.jpg", title: "Logo Komunitas", desc: "Logo untuk komunitas kreatif." },
  { src: "assets/gallery15.jpg", title: "Poster Event", desc: "Poster untuk acara olahraga." },
  { src: "assets/gallery16.jpg", title: "Flyer Online", desc: "Flyer digital promosi jasa." },
  { src: "assets/gallery17.jpg", title: "Desain Kemasan", desc: "Packaging untuk produk UMKM." },
  { src: "assets/gallery18.jpg", title: "Banner Outdoor", desc: "Spanduk untuk acara bazaar." },
  { src: "assets/gallery19.jpg", title: "UI/UX Concept", desc: "Konsep aplikasi mobile." },
  { src: "assets/gallery20.jpg", title: "Digital Art", desc: "Artwork kreatif digital." }
];

// Elemen modal
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

let currentIndex = 0;

// Buka modal
function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  showImage(currentIndex);
}

// Tutup modal
function closeModal() {
  modal.style.display = "none";
}

// Ganti gambar
function showImage(index) {
  const data = galleryData[index];
  modalImg.classList.remove("show"); // reset animasi
  setTimeout(() => {
    modalImg.src = data.src;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalImg.classList.add("show");
  }, 150);
}

// Navigasi
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  showImage(currentIndex);
}

// Tutup modal kalau klik di luar konten
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

// Scroll reveal
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

fadeSections.forEach((section) => {
  observer.observe(section);
});

// Tombol kembali ke halaman project
function goBackToProjects() {
  window.location.href = "index.html#projects";
}
