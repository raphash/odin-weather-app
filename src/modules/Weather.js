const url = {
  key: "UYB6L34ACHYPVWV53P454QUKR",
  path: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  unit: "metric",
};

export async function getWeatherData(location) {
  // Fetch the api by key and unit.
  const response = await fetch(
    `${url.path}${location}?unitGroup=${url.unit}&key=${url.key}&contentType=json`,
  );

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return await response.json();
}
