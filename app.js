const contain = document.querySelector(".menu");
const restaurants_list = [
  {
    name: "Burger House",
    price: 500,
    qry: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/037/320/707/non_2x/ai-generated-hamburger-flying-on-white-background-neural-network-generatedrealistic-image-photo.jpg",
  },
  {
    qry: 1,
    price: 1100,
    name: "Pizza Palace",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVFkeW4YFuhGv0an6xaQNmH2B-3WAm5jxrg&s",
  },
  {
    name: "Desi Tadka",
    price: 1500,
    qry: 1,
    image:
      "https://www.shutterstock.com/image-photo/dal-tadka-popular-indian-dish-260nw-2091837487.jpg",
  },
  {
    qry: 1,
    name: "Sushi Spot",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=600&q=80",
  },
  {
    qry: 1,
    name: "Tandoori Flames",
    price: 3500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLpIyRSxlkMdLrUXyWAcjHTAe1ZuqG6EyZg&s",
  },
  {
    qry: 1,
    name: "Street Biryani",
    price: 4500,
    image:
      "https://www.shutterstock.com/image-photo/chicken-biryani-on-white-background-260nw-1062258263.jpg",
  },
];
restaurants_list.forEach((all, index) => {
  const card = document.createElement("div");
  card.className = "restaurants_list";
  card.innerHTML = ` <img src="${all.image}" alt="${all.name}" />
  <h2>${all.name}</h2                
  <h2>Price ${all.price}</h2>
  <button id="btn-view" onclick="addCard(${index})">Add Card</button>`;
  contain.appendChild(card);
});
const addCard = (index) => {
  const items_data = restaurants_list[index];
  const existingItems = JSON.parse(localStorage.getItem("items")) || [];
  existingItems.push(items_data);
  localStorage.setItem("items", JSON.stringify(existingItems));
  alert(`Item added to cart!: ${restaurants_list[index].name}`);
};
const logout = () => {
  localStorage.clear();
  location.href = "index.html";
};
let view = () => {
  location.href = "card.html";
};
