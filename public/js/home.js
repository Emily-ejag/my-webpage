// Home page featured projects - uses projects.js data
function renderProfessionalCase(project, index) {
  const isComparison = project.showComparison && project.beforeImage;
  const visualHTML = isComparison ? `
    <div class="case-visual" aria-label="${project.name} before and after visual comparison">
      <figure>
        <img src="${project.beforeImage}" alt="Before: ${project.name}">
        <figcaption>Before</figcaption>
      </figure>
      <figure>
        <img src="${project.image}" alt="After: ${project.name}">
        <figcaption>After</figcaption>
      </figure>
    </div>
  ` : `
    <div class="case-visual case-visual-single" aria-label="${project.name} project preview">
      <figure>
        <img src="${project.image}" alt="${project.name} interface preview">
        <figcaption>Redesign preview</figcaption>
      </figure>
    </div>
  `;
  const impactHTML = project.impact ? `
    <div class="case-list-wrap">
      <h4>Why the redesign works</h4>
      <ul class="case-list">
        ${project.impact.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  return `
    <article class="featured-case ${index > 0 ? 'featured-case-secondary' : ''} reveal">
      ${visualHTML}
      <div class="case-content">
        <p class="case-label">Professional frontend work</p>
        <h3>${project.name}</h3>
        <p class="case-meta">${project.organization} | ${project.date}</p>
        <p>${project.description}</p>
        ${impactHTML}
        <div class="case-list-wrap">
          <h4>Key work</h4>
          <ul class="case-list">
            ${project.keyWork.map(work => `<li>${work}</li>`).join('')}
          </ul>
        </div>
        <div class="tech-stack" aria-label="${project.name} technology stack">
          ${project.tech.map(item => `<span>${item}</span>`).join('')}
        </div>
        <div class="case-actions">
          ${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-link">${link.text}</a>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProjects() {
  const roarContainer = document.getElementById('roar-featured');
  const academicContainer = document.getElementById('academic-projects');

  if (!roarContainer || !academicContainer) return;

  roarContainer.innerHTML = projectsData.professional.projects
    .map((project, index) => renderProfessionalCase(project, index))
    .join('');

  const selectedProjects = [
    ...projectsData.uiux.projects,
    ...projectsData.frontend.projects
  ];

  academicContainer.innerHTML = selectedProjects.map(project => `
    <article class="work-card reveal">
      <a class="work-image" href="${project.link}" aria-label="View ${project.name}">
        <img src="${project.image}" alt="${project.name} preview">
      </a>
      <div class="work-card-content">
        <p class="work-type">${project.subtitle || (project.details ? 'Frontend build' : 'UX case study')}</p>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="text-link">View project</a>
      </div>
    </article>
  `).join('');
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px'
  });

  revealItems.forEach(item => observer.observe(item));
}

function initHeroMotion() {
  const hero = document.querySelector('.hero-section');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.addEventListener('pointermove', event => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    hero.style.setProperty('--hero-x', x.toFixed(3));
    hero.style.setProperty('--hero-y', y.toFixed(3));
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.classList.add('js-enabled');
  renderFeaturedProjects();
  initRevealAnimations();
  initHeroMotion();
});
