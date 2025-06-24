window.addEventListener('DOMContentLoaded', () => {
  const numHearts = 25;

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-20px`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.opacity = 0.5 + Math.random() * 0.3;
    heart.style.transform = `rotate(45deg) scale(${0.8 + Math.random() * 0.5})`;
    document.body.appendChild(heart);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'floating-hearts-container';
  document.body.appendChild(container);

  const NUM_HEARTS = 40;

  for (let i = 0; i < NUM_HEARTS; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('floating-svg-heart', 'glow');
    svg.setAttribute("viewBox", "0 0 32 29.6");
    svg.style.left = `${Math.random() * 100}%`;
    svg.style.animationDelay = `${Math.random() * 10}s`;
    svg.style.animationDuration = `${6 + Math.random() * 6}s`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#f7accf");
    path.setAttribute("d", "M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z");

    svg.appendChild(path);
    container.appendChild(svg);
  }
});

// ✨ Throttled cursor hearts — SLOWER APPEARANCE
let lastCursorHeart = 0;
const cursorHeartInterval = 150; // ms between heart appearances

document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastCursorHeart < cursorHeartInterval) return;
  lastCursorHeart = now;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add('cursor-heart-svg');
  svg.setAttribute("viewBox", "0 0 32 29.6");
  svg.style.left = `${e.clientX}px`;
  svg.style.top = `${e.clientY}px`;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "#f7accf");
  path.setAttribute("d", "M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z");

  svg.appendChild(path);
  document.body.appendChild(svg);

  setTimeout(() => svg.remove(), 1200);
});

const loveQuotes = [
  "You are my home.",
  "Forever starts with you.",
  "Even silence with you is poetry.",
  "Every heartbeat is yours.",
  "You live in every letter I write.",
  "You're my favorite place.",
  "Loving you feels like breathing.",
  "You're my life.",
  "Laaibah you're amazing."
];

// randomly position the notes along the left or right
for (let i = 0; i < loveQuotes.length; i++) {
  const note = document.createElement('div');
  note.className = 'love-note';
  note.textContent = loveQuotes[i];

  // Only place notes near left or right edge (10–20% and 80–90%)
  const side = Math.random() < 0.5
    ? Math.random() * 10 + 5     // Left: 5%–15%
    : Math.random() * 10 + 80;   // Right: 80%–90%
  note.style.left = `${side}%`;

  // Place them vertically at random height
  note.style.bottom = `${Math.random() * 50 + 20}%`;
  note.style.animationDelay = `${Math.random() * 10}s`;

  document.body.appendChild(note);
}
// ✨ Sparkles
for (let i = 0; i < 30; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-dot';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.bottom = `${Math.random() * 100}vh`;
  sparkle.style.animationDelay = `${Math.random() * 20}s`;
  document.body.appendChild(sparkle);
}

// 🍃 Petals
for (let i = 0; i < 20; i++) {
  const petal = document.createElement('div');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.top = `-${Math.random() * 100}px`;
  petal.style.animationDelay = `${Math.random() * 15}s`;
  petal.style.animationDuration = `${10 + Math.random() * 10}s`;
  document.body.appendChild(petal);
}

// 🌟 Ambient glow orbs
const orb1 = document.createElement('div');
orb1.className = 'orb';
orb1.style.top = '20%';
orb1.style.left = '10%';

const orb2 = document.createElement('div');
orb2.className = 'orb';
orb2.style.bottom = '15%';
orb2.style.right = '10%';

document.body.appendChild(orb1);
document.body.appendChild(orb2);

// 💌 Floating envelopes
for (let i = 0; i < 10; i++) {
  const envelope = document.createElement('div');
  envelope.className = 'love-envelope';
  envelope.style.left = `${Math.random() * 100}%`;
  envelope.style.bottom = `-${Math.random() * 100}px`;
  envelope.style.animationDelay = `${Math.random() * 20}s`;
  document.body.appendChild(envelope);
}

// 🌿 Side vines
const vineLeft = document.createElement('div');
vineLeft.className = 'side-fill left';
document.body.appendChild(vineLeft);

const vineRight = document.createElement('div');
vineRight.className = 'side-fill right';
document.body.appendChild(vineRight);

// 💫 Glow orbs closer to center
const orbLeft = document.createElement('div');
orbLeft.className = 'side-orb';
orbLeft.style.top = '30%';
orbLeft.style.left = '40px'; // ← close to the container
document.body.appendChild(orbLeft);

const orbRight = document.createElement('div');
orbRight.className = 'side-orb';
orbRight.style.bottom = '25%';
orbRight.style.right = '40px'; // ← close to the container
document.body.appendChild(orbRight);

// ✨ Sparkles
for (let i = 0; i < 25; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'side-sparkle';
  sparkle.style.left = `${Math.random() < 0.5 ? Math.random() * 6 + 1 : 94 + Math.random() * 5}%`;
  sparkle.style.bottom = `${Math.random() * 100}vh`;
  sparkle.style.animationDelay = `${Math.random() * 10}s`;
  document.body.appendChild(sparkle);
}
