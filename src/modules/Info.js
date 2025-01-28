function clearInfoCard() {
  const card = document.querySelector(".card");
  if (card) document.body.removeChild(card);
}

export function createInfoCard(location, temperature, conditions) {
  clearInfoCard();

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `<p class="card-location">Location: ${location}</p>
                        <p class="card-temperature">Temperature: ${temperature}</p>
                        <p class="card-conditions">Condition: ${conditions}</p>`;

  document.body.appendChild(card);
}
