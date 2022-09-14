export const getCategories = async () => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();
  const categories = new Set(
    data.map((item) => {
      let category = item.category.split(" ");
      const newText = category
        .map((c) => c[0].toUpperCase() + c.slice(1))
        .join(" ");
      return newText;
    })
  );
  return Array.from(categories).sort();
};

export const getProducts = async () => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();
  return data.find((item) => item.id === id);
};

export const getProductByTitle = async (title) => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();
  return data.find((item) => item.title.toLowerCase() === title.toLowerCase());
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();
  return data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByPriceRange = async (
  minPrice = null,
  maxPrice = null
) => {
  const response = await fetch(window.location.origin + "/data.json");
  const data = await response.json();

  if (!maxPrice && !minPrice) return data;

  let filtered = [...data];
  if (minPrice) {
    filtered = filtered.filter((item) => item.price >= minPrice);
  }
  if (maxPrice) {
    filtered = filtered.filter((item) => item.price <= maxPrice);
  }
  return filtered;
};
