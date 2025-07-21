// contact-section.js

const fontAwesomeKit = "a076d05399"; // Kendi Font Awesome kit kodun

const script = document.createElement("script");
script.src = `https://kit.fontawesome.com/${fontAwesomeKit}.js`;
script.crossOrigin = "anonymous";
document.head.appendChild(script);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact section loaded!");
});
