function loadHomePage() {
    const content = document.querySelector("#content");

    const hero = document.createElement("section");
    hero.classList.add("hero");

    const smallTitle = document.createElement("p");
    smallTitle.classList.add("small-title");
    smallTitle.textContent = "WELCOME TO";

    const heading = document.createElement("h1");
    heading.textContent = "Keshu's Kitchen";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent =
        "Fresh ingredients, delicious flavors, and a warm dining experience.";

    const button = document.createElement("button");
    button.classList.add("hero-button");
    button.textContent = "Discover Our Food";

    hero.appendChild(smallTitle);
    hero.appendChild(heading);
    hero.appendChild(description);
    hero.appendChild(button);

    const features = document.createElement("section");
    features.classList.add("features");

    const featureData = [
        ["🍽️", "Fresh Food", "Fresh ingredients prepared every day."],
        ["⭐", "Quality Taste", "Delicious food made with care."],
        ["❤️", "Made With Love", "Every dish is prepared with passion."]
    ];

    featureData.forEach(([icon, title, text]) => {
        const card = document.createElement("div");
        card.classList.add("feature");

        const iconElement = document.createElement("div");
        iconElement.classList.add("feature-icon");
        iconElement.textContent = icon;

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;

        const textElement = document.createElement("p");
        textElement.textContent = text;

        card.appendChild(iconElement);
        card.appendChild(titleElement);
        card.appendChild(textElement);

        features.appendChild(card);
    });

    content.appendChild(hero);
    content.appendChild(features);
}

export default loadHomePage;