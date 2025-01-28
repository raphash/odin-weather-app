import { getWeatherData, filterWeatherData } from "./Weather";

// Shows location data in console
async function showData(location) {
  try {
    const data = filterWeatherData(await getWeatherData(location.value));
    console.log(data);
  } catch (error) {
    if (error.code == 400) {
      console.error("Location not found!");
    } else {
      console.error(error);
    }
  }
}

export async function renderForm() {
  const form = document.createElement("form");

  form.innerHTML = `<input
                      type="text"
                      name="location"
                      id="location"
                      class="location"
                      placeholder="United States"
                      required
                    />
                    <button type="submit" class="search">Search</button>`;

  const location = form.querySelector(".location");

  // Configure form to fetch data when submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.checkValidity()) showData(location);
  });

  document.body.appendChild(form);
}
