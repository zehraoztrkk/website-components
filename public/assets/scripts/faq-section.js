const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = document.getElementById(header.getAttribute('aria-controls'));
    const expanded = header.getAttribute('aria-expanded') === 'true';

    header.setAttribute('aria-expanded', !expanded);
    header.classList.toggle('active');

    if (!expanded) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
