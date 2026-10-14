document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});

/*
function loadProjects() {
    const projectsContainer = document.querySelector('.projects-ko');
    if (!projectsContainer) return;

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projectsContainer.innerHTML = ''; 
            data.forEach(project => {
                // Kung nagsisimula sa 'http', gagawin niyang clickable link. Kung hindi, text lang.
                const githubDisplay = project.github.startsWith('http') 
                    ? `<a href="${project.github}" target="_blank">View Repository</a>` 
                    : project.github;

                const card = document.createElement('div');
                card.classList.add('project-me');
                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p class="project-meta"><b>Technologies:</b> ${project.technologies}</p>
                    <p class="project-meta"><b>Role:</b> ${project.role}</p>
                    <p class="project-eme"><b>GitHub:</b> ${githubDisplay}</p>
                `;
                projectsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading projects.json:', error);
        });
}
*/
