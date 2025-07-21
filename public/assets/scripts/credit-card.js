const card = document.getElementById("credit-card");
const cardInner = document.querySelector(".card-inner");
const numberInput = document.getElementById("card-number");
const nameInput = document.getElementById("card-name");
const expInput = document.getElementById("card-exp");
const cvvInput = document.getElementById("card-cvv");

const numberDisplay = document.getElementById("card-number-display");
const nameDisplay = document.getElementById("card-name-display");
const expDisplay = document.getElementById("card-exp-display");
const cvvDisplay = document.getElementById("card-cvv-display");

numberInput.addEventListener("input", () => {
  let value = numberInput.value.replace(/\D/g, "").slice(0, 16);
  value = value.replace(/(.{4})/g, "$1 ").trim();
  numberInput.value = value;
  numberDisplay.textContent = value || "#### #### #### ####";
});

nameInput.addEventListener("input", () => {
  nameDisplay.textContent = nameInput.value || "AD SOYAD";
});

expInput.addEventListener("input", () => {
  let value = expInput.value.replace(/\D/g, "").slice(0, 4);
  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  expInput.value = value;
  expDisplay.textContent = value || "MM/YY";
});

cvvInput.addEventListener("focus", () => {
  cardInner.style.transform = "rotateY(180deg)";
});

cvvInput.addEventListener("blur", () => {
  cardInner.style.transform = "rotateY(0deg)";
});

cvvInput.addEventListener("input", () => {
  let value = cvvInput.value.replace(/\D/g, "").slice(0, 3);
  cvvInput.value = value;
  cvvDisplay.textContent = value || "•••";
});
