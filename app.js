function showCard(cardId, link) {
  const cards = document.querySelectorAll('.profile-card');
  cards.forEach(card => card.classList.remove('active'));

  document.getElementById(cardId).classList.add('active');

  const navLinks = document.querySelectorAll('.nav-inline li a');
  navLinks.forEach(a => a.classList.remove('active'));

  link.classList.add('active');
  
}

