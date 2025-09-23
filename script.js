/* ==========================
   Scroll Progress Bar
========================== */
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}
window.addEventListener("scroll", updateProgressBar);


/* ==========================
   Typing Effect Variasi
========================== */
const typingElement = document.getElementById("typing");
const texts = ["Editor Video", "Desainer Grafis", "Animator", "Fotografer", "IT Support"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex) + "|";

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeWriter, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeWriter, 60);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 1200);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 400);
    }
  }
}
typeWriter();

/* ==========================
   Fade-in Sections
========================== */
const fadeSections = document.querySelectorAll(".fade-section");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => fadeObserver.observe(section));


/* ==========================
   Auto Footer Year
========================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================
   Smooth Scroll + Scrollspy
========================== */
const sectionsSpy = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sectionsSpy.forEach(section => {
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
   Animated Skill Bars
========================== */
const skillBars = document.querySelectorAll(".skill");
function animateSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skillBars.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < triggerBottom) skill.classList.add("animate");
  });
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

/* ==========================
   Tilt Hover Effect
========================== */
VanillaTilt.init(document.querySelectorAll(".project-card, .profile"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});
