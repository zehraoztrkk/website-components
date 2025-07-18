document.addEventListener('DOMContentLoaded', () => {
  const languageButtons = document.querySelectorAll('.language-btn');
  const navLinks = document.querySelectorAll('.nav-links a');

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkında",
      services: "Hizmetler",
      contact: "İletişim"
    }
  };

  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      languageButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      
      const selectedLang = button.textContent.toLowerCase();

    
      navLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translations[selectedLang][key];
      });
    });
  });
});
