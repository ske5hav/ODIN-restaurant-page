function loadContactPage() {
    const content = document.querySelector("#content");

    const section = document.createElement("section");
    section.classList.add("contact-section");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const subtitle = document.createElement("p");
    subtitle.textContent =
        "Have a question or want to visit us? Get in touch with Keshu's Kitchen.";

    section.appendChild(heading);
    section.appendChild(subtitle);

    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");

    const contactDetails = [
        ["📍", "Address", "MG Road, Gurgaon, Haryana"],
        ["📞", "Phone", "+91 98765 43210"],
        ["📧", "Email", "hello@keshuskitchen.com"],
        ["🕐", "Opening Hours", "11:00 AM - 10:30 PM"]
    ];

    contactDetails.forEach(([icon, title, text]) => {

        const card = document.createElement("div");
        card.classList.add("contact-card");

        const iconElement = document.createElement("div");
        iconElement.classList.add("contact-icon");
        iconElement.textContent = icon;

        const cardTitle = document.createElement("h3");
        cardTitle.textContent = title;

        const cardText = document.createElement("p");
        cardText.textContent = text;

        card.appendChild(iconElement);
        card.appendChild(cardTitle);
        card.appendChild(cardText);

        contactGrid.appendChild(card);
    });

    section.appendChild(contactGrid);

    content.appendChild(section);
}

export default loadContactPage;