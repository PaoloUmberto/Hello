// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

const pippoButton = document.getElementById('pippo-button');
const pippoSvg = document.getElementById('pippo-svg');

function rotateSvg() {
  pippoSvg.classList.toggle('rotate-180');
}

// When someone clicks the button
pippoButton.addEventListener('click', () => {
  rotateSvg();
  scrollToBottom();
});



function scrollToBottom() {
  const pippoSection = document.getElementById('pippo-section');
  const scrollTo = pippoSection.scrollHeight - window.innerHeight;
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll < scrollTo) {
    // Scroll to the bottom
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  } else {
    // Scroll to the original position
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
