const createCard = document.querySelector('#createCard');
const formCard = document.querySelector('#formCard');
const cards = document.querySelector('#cards');

createCard.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'http://localhost:3000/formCard';
});

formCard.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    title, description, method, action,
  } = event.target;
  const response = await fetch(action, {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
    }),
  });
  const body = await response.text();
  cards.innerHTML += body;
});
