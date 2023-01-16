const categoriesItem = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((element) => {
    console.log("Category:", element.querySelector("h2").textContent);
    console.log("Elements:", element.querySelectorAll("li").length);
});

