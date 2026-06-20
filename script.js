// Glossary data rendered with JavaScript to demonstrate basic interactivity.
const glossaryTerms = [
  ["Figma", "Digital design", "A collaborative tool used to create interfaces, prototypes, and visual systems."],
  ["User interface", "Digital experience", "The visual and interactive part through which a person uses a digital product."],
  ["Component", "Interface design", "A reusable element, such as a button, card, or health bar."],
  ["Auto Layout", "Figma", "A feature that organizes elements dynamically and supports responsive designs."],
  ["Variant", "Component design", "A different state or version of the same component."],
  ["Design system", "Visual organization", "A structured set of reusable rules, styles, and components."],
  ["Frame", "Figma", "A container that groups and organizes elements inside a design file."],
  ["Asset", "Digital production", "A file, image, icon, or design element that can be reused."],
  ["9-slice scaling", "Video game UI", "A technique for stretching panels without deforming their corners."],
  ["Prototype", "Validation", "An interactive model used to test an experience before full development."],
  ["Responsive design", "Web development", "A structure that adapts to phones, tablets, and computers."],
  ["Grid system", "Layout", "An organization method based on rows and columns."],
  ["Bootstrap", "Front-End", "A framework that helps create responsive websites."],
  ["JavaScript", "Web programming", "A language used to add interactivity to web pages."],
  ["HTML5", "Web structure", "The modern standard language for organizing page content."],
  ["CSS3", "Web design", "A language used to define colors, sizes, layout, and visual appearance."],
  ["Artificial intelligence", "Technology", "Systems capable of performing tasks related to human reasoning."],
  ["Automation", "Productivity", "The use of systems to execute tasks with less manual intervention."],
  ["Data privacy", "Digital ethics", "The protection and responsible use of personal information."],
  ["Accessibility", "User experience", "A design practice that allows more people to use a product."],
  ["Usability", "Software quality", "How easy and efficient a product is for users."],
  ["Navigation", "Web design", "The system that helps users move between sections or pages."],
  ["Hero section", "Web structure", "The first highlighted block of a page, usually with a title and call to action."],
  ["Card", "Interface", "A compact container for presenting related information."],
  ["Carousel", "Web component", "An element that displays content in slides."],
  ["Semantic tag", "HTML5", "A tag that clearly describes the meaning of its content."],
  ["SEO", "Web visibility", "Practices that help search engines understand a page."],
  ["Ethics", "Professional responsibility", "Principles that guide correct and responsible decisions."],
  ["Cybersecurity", "Digital protection", "The defense of systems, networks, and data against technological threats."],
  ["Software development", "Systems engineering", "The process of designing, building, testing, and maintaining programs."]
];

const glossaryBody = document.querySelector("#glossaryBody");

if (glossaryBody) {
  glossaryTerms.forEach(([term, area, definition]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${term}</strong></td>
      <td>${area}</td>
      <td>${definition}</td>
    `;
    glossaryBody.appendChild(row);
  });
}

// Close the mobile menu after selecting a link.
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#navbarContent");
    const bootstrapMenu = bootstrap.Collapse.getInstance(menu);

    if (bootstrapMenu) {
      bootstrapMenu.hide();
    }
  });
});

// Add a small visual response when hovering over images.
document.querySelectorAll(".photo-tile").forEach((tile) => {
  tile.addEventListener("mouseenter", () => tile.classList.add("is-hovered"));
  tile.addEventListener("mouseleave", () => tile.classList.remove("is-hovered"));
});
