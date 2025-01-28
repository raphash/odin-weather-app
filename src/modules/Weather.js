const url = {
  key: "UYB6L34ACHYPVWV53P454QUKR",
  path: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  unit: "metric",
};

export async function getWeatherData(location) {
  // Fetch the api by key and unit
  const response = await fetch(
    `${url.path}${location}?unitGroup=${url.unit}&key=${url.key}&contentType=json`,
    { mode: "cors" },
  );

  if (!response.ok) {
    const error = new Error(`Response Status: ${response.status}`);

    // Assign code to error
    error.code = response.status;

    throw error;
  }

  return await response.json();
}

export function filterWeatherData(weatherData) {
  const { resolvedAddress, currentConditions } = weatherData;
  return { resolvedAddress, currentConditions };
}
