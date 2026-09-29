function loadMenuPage() {
    const content = document.querySelector("#content");

    const section = document.createElement("section");
    section.classList.add("menu-section");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Freshly prepared dishes made for you.";

    section.appendChild(heading);
    section.appendChild(subtitle);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    const menuItems = [
        ["🍕", "Margherita Pizza", "Fresh tomato, mozzarella and basil.", "₹250"],
        ["🍔", "Classic Burger", "Juicy burger with fresh vegetables.", "₹180"],
        ["🍝", "Creamy Pasta", "Creamy pasta with herbs and cheese.", "₹220"],
        ["🍗", "Grilled Chicken", "Tender chicken with special herbs.", "₹320"],
        ["🥗", "Fresh Salad", "Healthy vegetables with house dressing.", "₹150"],
        ["🍰", "Chocolate Cake", "Soft chocolate cake with rich cream.", "₹120"]
    ];

    menuItems.forEach(([icon, name, description, price]) => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const foodIcon = document.createElement("div");
        foodIcon.classList.add("food-icon");
        foodIcon.textContent = icon;

        const foodName = document.createElement("h2");
        foodName.textContent = name;

        const foodDescription = document.createElement("p");
        foodDescription.textContent = description;

        const foodPrice = document.createElement("strong");
        foodPrice.textContent = price;

        card.appendChild(foodIcon);
        card.appendChild(foodName);
        card.appendChild(foodDescription);
        card.appendChild(foodPrice);

        menuGrid.appendChild(card);
    });

    section.appendChild(menuGrid);
    content.appendChild(section);
}

export default loadMenuPage;