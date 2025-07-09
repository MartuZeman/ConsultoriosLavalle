
const header = document.querySelector('.main-header');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

