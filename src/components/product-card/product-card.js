const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const productCard = document.getElementById('productCard');
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', (e) => {
    e.stopPropagation(); 
    mainImage.src = thumb.src;
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

productCard.addEventListener('click', () => {
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
