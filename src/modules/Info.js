function clearInfoCard() {
  const card = document.querySelector(".card");
  if (card) document.body.removeChild(card);
}

export function createInfoCard(location, temperature, conditions) {
  clearInfoCard();

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `<p class="card-location">${location}</p>
                    <p class="card-temperature"><span>Temperature: </span>${temperature} °C</p>
                    <p class="card-conditions"><span>Condition: </span>${conditions}</p>`;

  document.body.appendChild(card);
}
