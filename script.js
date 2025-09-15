// ===== Utilities =====
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// ===== Mobile menu =====
const menuBtn = $('.menu-btn');
const navLinks = $('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.gap = '16px';
  });
}

// ===== Sticky header micro change =====
const header = $('.site-header');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  header.style.boxShadow = y > 8 ? '0 6px 24px rgba(10,50,120,.08)' : 'none';
  lastY = y;
});

// ===== Reveal on scroll (IntersectionObserver) =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
},{threshold:.14});
$$('.reveal').forEach(el => io.observe(el));

// ===== Simple tilt effect =====
$$('.tilt').forEach(card => {
  const damp = 18;
  const reset = () => { card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; };
  reset();
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y / r.height) - .5) * -damp;
    const ry = ((x / r.width) - .5) * damp;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', reset);
});

// ===== Contact form faux submit =====
const form = $('.contact-form');
const sendBtn = $('#sendBtn');
const formStatus = $('#formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = 'Mengirim...';
    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Kirim';
      form.reset();
      formStatus.textContent = 'Terima kasih! Pesan Anda sudah terkirim (simulasi).';
    }, 900);
  });
}

// ===== Year in footer =====
$('#year').textContent = new Date().getFullYear();

// Tambahkan animasi klik untuk ikon sosial media
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons a");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.add("clicked");
      setTimeout(() => {
        icon.classList.remove("clicked");
      }, 300);
    });
  });
});

// Efek klik ikon sosial media
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons a");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.add("clicked");
      setTimeout(() => {
        icon.classList.remove("clicked");
      }, 300);
    });
  });

  // Highlight menu navbar saat scroll
  const sections = document.querySelectorAll("section, header, footer");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 🔹 Animasi muncul saat scroll (Intersection Observer)
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // hanya sekali muncul
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(rev => {
    observer.observe(rev);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Efek klik ikon sosmed
  const icons = document.querySelectorAll(".social-icons a");
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.add("clicked");
      setTimeout(() => icon.classList.remove("clicked"), 300);
    });
  });

  // Highlight navbar saat scroll
  const sections = document.querySelectorAll("section, header, footer");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 🔹 Animasi reveal per arah
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(rev => observer.observe(rev));
});
