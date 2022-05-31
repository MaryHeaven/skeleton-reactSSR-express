// const { response } = require("express");

const formCard = document.querySelector('#formCard');
const cards = document.querySelector('#cards');
const myCard = document.querySelector('#mycard');
const cardsDiv = document.getElementById('cardsDiv');
const cardModal = document.querySelector('.modal-update');
const btnUpdateCard = document.querySelector('.card-update');

formCard.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    title, description, img, method,
  } = event.target;
  const response = await fetch('/formcard', {
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
  const indShow = e.target.getAttribute('showid');
  const indUpd = e.target.getAttribute('updateid');
  // console.log('ind', ind);
  console.log('div', div);
  if (ind) {
    await fetch(`formcard/${ind}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    div.remove();
  }
  if (indShow) {
    const frm = document.getElementById(`redForm${indShow}`);
    frm.style.visibility = 'visible';
  }
  if (indUpd) {
    const title = document.getElementById(`name${indUpd}`);
    const desc = document.getElementById(`description${indUpd}`);
    const img = document.getElementById(`image${indUpd}`);

    const body = {
      newTitle: title.value,
      newDescription: desc.value,
      newImg: img.value,
    };
    console.log(body);
    const response = await fetch(`formcard/${indUpd}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.text();
   document.getElementById(indUpd).innerHTML = data;
  }
});

// btnUpdateCard.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const div = e.target.parentNode.parentNode;
//   const cardsDivv = e.target.parentNode.parentNode;
//   console.log('cardDiv', cardsDivv);
//   const btnUp = e.target.getAttribute('updateid');
//   console.log('ET ', e.target.parentNode.children);
//   const { newTitle, newDescription, newImg } = e.target.parentNode.children;
//   console.log('e.target.parentNode.children', e.target.parentNode.parentNode.children);
//   const body = JSON.stringify({
//     title: newTitle.value,
//     description: newDescription.value,
//     img: newImg.value,
//   });
//   const response = await fetch(`lk/${btnUp}`, {
//     method: 'PUT',
//     body,
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const data = await response.text();
//   div.remove();
// });

// for (let i = 0; i < 100; i += 1) {
//   console.log(document.getElementById(`redForm${i}`));
//   document.getElementById(`redForm${i}`)?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log('YA TUT');
//     const newTitle = document.getElementById(`name${id}`);
//     const newDescription = document.getElementById(`description${id}`);
//     const newImg = document.getElementById(`image${id}`);

//     const body = {
//       newTitle,
//       newDescription,
//       newImg,
//     };

//     const resp = await fetch(`/lk/:${id}`, {
//       method: 'PUT',
//       body,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   });
// }
