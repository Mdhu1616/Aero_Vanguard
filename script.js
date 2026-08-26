const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#waitlist').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.message').textContent = 'REQUEST RECEIVED // FLIGHT DESK WILL RESPOND WITHIN 24 HOURS';
  event.target.reset();
});
