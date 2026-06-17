export default async function servicePaises() {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/positions"
  );

  const data = await response.json();

  return data.data;
}