// Toggle extra introduction text
const moreBtn = document.getElementById('moreBtn');
const moreText = document.getElementById('moreText');

if (moreBtn && moreText) {
  moreBtn.addEventListener('click', () => {
    moreText.classList.toggle('hidden');
  });
}

// Toggle program information
const programButtons = document.querySelectorAll('.program-btn');
programButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const info = btn.nextElementSibling;
    if (info) {
      info.classList.toggle('hidden');
    }
  });
});

// Scroll to top functionality
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      topBtn.classList.remove('hidden');
    } else {
      topBtn.classList.add('hidden');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
