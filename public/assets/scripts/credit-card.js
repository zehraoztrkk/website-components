const cardNumberInput = document.getElementById('card-number');
const cardNameInput = document.getElementById('card-name');
const cardExpInput = document.getElementById('card-exp');
const cardCvvInput = document.getElementById('card-cvv');

const cardNumberDisplay = document.getElementById('card-number-display');
const cardNameDisplay = document.getElementById('card-name-display');
const cardExpDisplay = document.getElementById('card-exp-display');
const cardCvvDisplay = document.getElementById('card-cvv-display');

const creditCard = document.getElementById('credit-card');

cardNumberInput.addEventListener('input', () => {
  let value = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
  value = value.replace(/(.{4})/g, '$1 ').trim();
  cardNumberInput.value = value;
  cardNumberDisplay.textContent = value || '#### #### #### ####';
});


cardNameInput.addEventListener('input', () => {

  let value = cardNameInput.value.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ\s'-]/g, '');

  value = value
    .toLowerCase()
    .replace(/(^|\s|'|-)([a-zğüşöç])/g, (match, p1, p2) => p1 + p2.toUpperCase());

  cardNameInput.value = value;
  cardNameDisplay.textContent = value || 'AD SOYAD';
});
cardNameInput.addEventListener('input', () => {
  let value = cardNameInput.value.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ\s'-]/g, '');

  value = value
    .toLowerCase()
    .replace(/(^|\s|'|-)([a-zğüşöç])/g, (match, p1, p2) => p1 + p2.toUpperCase());

  cardNameInput.value = value;
  cardNameDisplay.textContent = value || 'AD SOYAD';
});



cardExpInput.addEventListener('input', () => {
  let value = cardExpInput.value.replace(/\D/g, '').substring(0, 4);
  if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
  }
  cardExpInput.value = value;
  cardExpDisplay.textContent = value || 'MM/YY';
});

cardCvvInput.addEventListener('focus', () => {
  creditCard.classList.add('flipped');
});

cardCvvInput.addEventListener('blur', () => {
  creditCard.classList.remove('flipped');
});

cardCvvInput.addEventListener('input', () => {
  let value = cardCvvInput.value.replace(/\D/g, '').substring(0, 3);
  cardCvvInput.value = value;

  if (value.length === 0) {
    cardCvvDisplay.textContent = '•••';
  } else if (value.length === 1) {
    cardCvvDisplay.textContent = '••' + value.charAt(0);
  } else if (value.length === 2) {
    cardCvvDisplay.textContent = '•' + value.slice(0, 2);
  } else {
    cardCvvDisplay.textContent = value;
  }
});