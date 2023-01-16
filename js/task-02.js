const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListItem = (ingredient) => {
  const itemName = document.createElement("li");
  itemName.textContent = ingredient;
  itemName.classList.add("item");
  return itemName;
  };

  const ingredientsList = ingredients.map(makeListItem);
  
  document.getElementById("ingredients").append(...ingredientsList);
