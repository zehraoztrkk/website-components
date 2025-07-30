const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close');
const showInfoBtn = document.querySelector('.show-info');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', (e) => {
    e.stopPropagation(); 
    mainImage.src = thumb.src;
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});


showInfoBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  modal.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
