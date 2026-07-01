// Home page featured projects - uses projects.js data
function renderFeaturedProjects() {
  const roarContainer = document.getElementById('roar-featured');
  const academicContainer = document.getElementById('academic-projects');

  if (!roarContainer || !academicContainer) return;

  // Render ROAR
  const roar = projectsData.professional.projects[0];
  roarContainer.innerHTML = `
    <div style="margin-bottom: 3rem;">
      <div class="project-card" style="border: 2px solid var(--primary); box-shadow: 0 8px 25px rgba(26, 122, 122, 0.3);">
        <div class="project-card-header" style="background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%); padding: 2.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <span style="font-size: 0.85rem; background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; color: white; font-weight: 600;">PROFESSIONAL</span>
          </div>
          <h3 style="margin: 0.5rem 0;">${roar.name}</h3>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 0.95rem;">${roar.organization}</p>
        </div>
        <div class="project-card-body">
          <p><strong>${roar.organization} | ${roar.date} | 3+ years total</strong></p>
          <p style="margin-top: 1rem;">${roar.description.split('.')[0]}. ${roar.description.substring(roar.description.indexOf('.') + 1).trim()}</p>
          <p><strong>Key Achievements:</strong></p>
          <ul style="margin: 0.5rem 0; padding-left: 1.5rem; color: var(--text-light);">
            ${roar.keyWork.map(work => `<li>${work}</li>`).join('')}
          </ul>
          <p style="margin-top: 1rem;"><strong>Tech Stack:</strong> ${roar.tech.join(', ')}</p>
          <div class="project-card-footer" style="gap: 0.5rem;">
            ${roar.links.map(link => `<a href="${link.url}" target="_blank" class="project-link">${link.text}</a>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Render academic projects
  const academicProjects = projectsData.uiux.projects.slice(0, 4);
  const cardsHTML = academicProjects.map(project => `
    <div class="project-card">
      <div class="project-card-header">
        <h3>${project.name}</h3>
        <p style="color: rgba(255,255,255,0.9); margin: 0;">
          ${project.subtitle ? project.subtitle : 'Design Project'}
        </p>
      </div>
      <div class="project-card-body">
        <p>${project.description}</p>
        <div class="project-card-footer">
          <a href="${project.link}" class="project-link">View Project</a>
        </div>
      </div>
    </div>
  `).join('');

  academicContainer.innerHTML = cardsHTML;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderFeaturedProjects);
