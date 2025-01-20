const enterButton = document.getElementById('enterButton');
const overlay = document.getElementById('overlay');
const letterContainer = document.getElementById('letterContainer');
const volumeSlider = document.getElementById('volumeSlider');
const backgroundMusic = document.getElementById('backgroundMusic');

enterButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
  backgroundMusic.play();
});

document.addEventListener('DOMContentLoaded', function () {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = function () {
    particlesJS("snow", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: { value: "#ffffff" },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true },
        },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 5,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
      },
      retina_detect: true,
    });
  };
  script.onerror = function () {
    console.error("Failed to load particles.js");
  };
  document.head.appendChild(script);

  const fragment = document.createDocumentFragment();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(10);
  letters.split('').forEach((letter, index) => {
    const letterElement = document.createElement('div');
    letterElement.textContent = letter;
    letterElement.className = 'letter';
    letterElement.style.animationDelay = `${index * 0.2}s`;
    fragment.appendChild(letterElement);
  });
  letterContainer.appendChild(fragment);
});

backgroundMusic.volume = volumeSlider.value;
volumeSlider.addEventListener('input', () => {
  backgroundMusic.volume = volumeSlider.value;
});

// Function to show a specific pop-up menu
function showPopupMenu(popupId, letter) {
  const popup = document.getElementById(popupId);
  popup.style.display = "block";
}

// Function to close a specific pop-up menu
function closePopupMenu(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "none";
}

// Add event listeners for A-Z buttons
document.querySelectorAll("#alphabetContainer button").forEach((button) => {
  button.addEventListener("click", () => {
    const letter = button.textContent;
    // Dynamically build the popup ID based on the letter clicked
    const popupId = `popupMenu${letter}`;
    showPopupMenu(popupId, letter);
  });
});

// Add event listeners for close buttons
document.querySelectorAll(".closePopup").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const popupId = closeButton.dataset.popup; // Data attribute identifies which popup to close
    closePopupMenu(popupId);
  });
});