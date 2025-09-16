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
   Typing Effect
========================== */
const typingElement = document.getElementById("typing");
const texts = ["Editor Video", "Desainer Grafis", "Operator Streaming", "Animator", "Fotografer", "IT Support"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 500);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1200);
      return;
    }
  }

  setTimeout(typeWriter, isDeleting ? 60 : 120);
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
