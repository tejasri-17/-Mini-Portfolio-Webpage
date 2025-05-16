// Simple animation on page load
window.onload = () => {
  document.querySelector('header').style.transition = 'all 1s';
  document.querySelector('header').style.transform = 'scale(1.05)';
};
