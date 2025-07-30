const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const isActive = header.classList.contains('active');

    headers.forEach(h => {
      h.classList.remove('active');
      h.setAttribute('aria-expanded', 'false');
      const content = h.nextElementSibling;
      content.style.maxHeight = null;
      content.style.opacity = 0;
      content.style.padding = '0 15px';
    });

    if (!isActive) {
      header.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
      const content = header.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
      content.style.padding = "15px";
    }
  });
});
