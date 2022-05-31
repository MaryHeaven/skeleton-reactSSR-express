const formCard = document.querySelector('#formCard');
const cards = document.querySelector('#cards');
const myCard = document.querySelector('#mycard');
const cardsDiv = document.getElementById('cardsDiv');

formCard.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    title, description, img, method,
  } = event.target;
  const response = await fetch('/lk', {
    method,
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      img: img.value,
    }),
  });
  const body = await response.text();
  console.log(cardsDiv);
  cardsDiv.innerHTML += body;
});

cardsDiv.addEventListener('click', async (e) => {
  e.preventDefault();
  const div = e.target.parentNode.parentNode;
  const ind = e.target.getAttribute('deleteid');
  console.log('ind', ind);
  console.log('div', div);
  if (ind) {
    await fetch(`lk/${ind}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    div.remove();
  }
});
