const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});


const text = "Creative Developer | Designer | Dreamer ✨";
const typeElement = document.getElementById("typewriter");
let i = 0;

function type() {
  if (i < text.length) {
    typeElement.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typeElement.textContent = "";
      i = 0;
      type();
    }, 2000);
  }
}
type();

const fades = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fades.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
});

const canvas = document.getElementById("live-bg");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  