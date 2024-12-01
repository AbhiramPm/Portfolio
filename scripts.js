
// Dynamic Skills
const skills = ["Software Quality Assurance", "Automation Testing", "Security Testing", "Performance Testing", "Digital Marketing", "WordPress Development"];
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Dynamic Projects
const projects = [
    { title: "Project 1", description: "Lorem ipsum dolor sit amet.", link: "#" },
    { title: "Project 2", description: "Consectetur adipiscing elit.", link: "#" }
];
const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}">View More</a>`;
    projectContainer.appendChild(card);
});

// Form Submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");
});

// Animations
ScrollReveal().reveal('.section', { duration: 1000, reset: true });
