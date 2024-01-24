const API_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error(`Something went wrong with products`);

  const data = await res.json();
  return data;
}

export async function getSomeProducts(number) {
  const res = await fetch(`${API_URL}?limit=${number}`);
  if (!res.ok) throw Error(`Something went wrong with products`);

  const data = await res.json();
  console.log(data);
  //   return data;
}
export async function getOneProducts() {
  const res = await fetch(`${API_URL}/2`);
  if (!res.ok) throw Error(`Something went wrong with products`);

  const data = await res.json();
  console.log(data);
  //   return data;
}
