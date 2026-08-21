// Project data structure
const projectsData = {
  professional: {
    title: 'Professional Frontend Work',
    projects: [
      {
        id: 'roar',
        name: 'ROAR - Rapid Online Assessment of Reading',
        organization: 'Stanford University',
        date: 'November 2023 - Present',
        description: 'A scalable web-based literacy assessment platform used by schools, districts, and researchers across the Stanford Reading & Dyslexia Research Program. As a frontend and assessment engineering lead, I shape user-facing product decisions, mock interaction flows, implement frontend systems, and deliver polished tools used by educators, students, and researchers.',
        image: 'img/roarLogin.png',
        beforeImage: 'img/beforeRoarLogo.png',
        showComparison: true,
        keyWork: [
          'Lead frontend development for school-facing assessment, reporting, support, and dashboard experiences',
          'Redesigned login flow with SSO auto-detection and fallback buttons—reducing authentication friction',
          'Implemented normed scores and adaptive testing standardization (CAT/jsCAT) across assessment suite',
          'Built Assessment SDK and event endpoints for extensible research infrastructure',
          'Mentor team members on frontend quality, accessibility, and maintainable software practices'
        ],
        tech: ['Vue.js', 'TypeScript', 'Firebase', 'Python', 'SQL', 'HTML5', 'CSS3'],
        links: [
          { text: 'Visit Live', url: 'https://roar.education' },
          { text: 'Design Prototype', url: 'https://www.figma.com/proto/XXFfiMqdrdfaUDaWxyOrLS/ROAR?node-id=1-2&starting-point-node-id=1%3A2' }
        ]
      },
      {
        id: 'request-form-redesign',
        name: 'Submit a Request Form Redesign',
        organization: 'Stanford University / ROAR Help Center',
        date: '2026',
        description: 'A redesigned Zendesk support request flow for educators and administrators reporting ROAR technical issues. I moved a long, dense form into a clearer frontend experience with recognizable sections, stronger field guidance, helpful placeholders, and a more compact layout that reduces scrolling while keeping the live support workflow intact.',
        image: 'img/request-form-redesign.png',
        beforeImage: 'img/request-form-before.svg',
        showComparison: true,
        impact: [
          'Helpful placeholders show users what a strong answer looks like before they start typing',
          'Identifiable sections make request type, user information, environment details, and issue description easier to scan',
          'A compact two-column desktop layout reduces scrolling while still collapsing into a readable mobile flow',
          'Side guidance surfaces privacy and submission tips without interrupting the form'
        ],
        keyWork: [
          'Proposed the improved request flow and translated the concept into a working frontend prototype',
          'Grouped fields into identifiable sections so users understand what information is needed and why',
          'Added placeholders, helper copy, and contextual side guidance to reduce uncertainty while filling out the form',
          'Made the form more compact with responsive two-column sections, reducing unnecessary scrolling on desktop',
          'Implemented the redesign for the live Zendesk request page while preserving required support fields and submission behavior'
        ],
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Zendesk', 'Responsive UI', 'UX Design'],
        links: [
          { text: 'Design Prototype', url: 'https://zendesk-roar-tehcnical-request.vercel.app/' },
          { text: 'Live Request Form', url: 'https://roareducation.zendesk.com/hc/en-us/requests/new' }
        ]
      }
    ]
  },
  frontend: {
    title: 'Front-end',
    projects: [
      {
        id: 'chatbot',
        name: 'React Chatbot',
        description: 'This chatbot was developed as part of an interview challenge, focusing on assisting users in organizing corporate events. I found the coding process quite satisfying, prompting me to share this project with you.',
        image: 'img/chatbot.png',
        link: 'chatbot.html',
        details: [
          { label: 'BotAvatar', text: 'This feature allows you to customize the avatar\'s appearance and name.' },
          { label: 'Buttons', text: 'Designed to provide users with convenient suggestions displayed on the left side of the page.' },
          { label: 'Date', text: 'A user-friendly calendar interface that simplifies the process of selecting event dates.' },
          { label: 'Goals', text: 'This component suggests event goals, offering valuable insights for event planning.' },
          { label: 'Plans', text: 'Similar to Goals, this section includes images of various event plans to facilitate decision-making.' }
        ],
        layout: 'horizontal'
      }
    ]
  },
  uiux: {
    title: 'UI/UX Design',
    projects: [
      {
        id: 'one-armed',
        name: 'One-Armed Cooking app',
        description: 'Providing hands-free recipe assistance during cooking and condensing web recipes into more accessible formats. Helps plan grocery shopping/delivery based on a week\'s meal plan. Assists users in cooking techniques and adaptations for cooking with one arm.',
        image: 'img/OneArmed.png',
        link: 'one-armed.html'
      },
      {
        id: 'choremate',
        name: 'ChoreMate',
        subtitle: 'Split Chores Easy',
        description: 'The user will create the account, add themselves to a household, create new chores, and rank their difficulty. Then, the user will have the app configured and will see their progress during chores compared to their roommates.',
        image: 'img/ChoreMate.png',
        link: 'choremate.html'
      },
      {
        id: 'scheduler',
        name: 'New Scheduler for OSU',
        description: 'Prioritizing user experience (UX) and intuitive UI design, our upgrade ensures a smoother, friendlier scheduling process, simplifying class selection for all users.',
        image: 'img/Scheduler.png',
        link: 'new-scheduler.html'
      }
    ]
  }
};

// Render professional projects
function renderProfessionalProjects() {
  const container = document.getElementById('professional-projects');
  if (!container) return;

  projectsData.professional.projects.forEach(project => {
    const imageSection = project.showComparison ? `
      <div class="project-card-comparison">
        <div class="comparison-item">
          <img src="${project.beforeImage}" alt="Before: ${project.name}">
          <p class="comparison-label">Before</p>
        </div>
        <div class="comparison-item">
          <img src="${project.image}" alt="After: ${project.name}">
          <p class="comparison-label">After</p>
        </div>
      </div>
    ` : `
      <div class="project-card-image">
        <img src="${project.image}" alt="${project.name}">
      </div>
    `;
    const impactSection = project.impact ? `
      <p class="project-subheader"><strong>Why the redesign works:</strong></p>
      <ul class="project-list">
        ${project.impact.map(item => `<li>${item}</li>`).join('')}
      </ul>
    ` : '';

    const projectHTML = `
      <div class="project-card">
        ${imageSection}
        <div class="project-card-content">
          <h2 class="project-title">${project.name}</h2>
          <p class="project-meta">${project.organization} | ${project.date}</p>
          <p class="project-description"><strong>${project.description.split('.')[0]}.</strong> ${project.description.substring(project.description.indexOf('.') + 1).trim()}</p>
          ${impactSection}
          <p class="project-subheader"><strong>Key Work:</strong></p>
          <ul class="project-list">
            ${project.keyWork.map(work => `<li>${work}</li>`).join('')}
          </ul>
          <p class="project-tech"><strong>Tech:</strong> ${project.tech.join(', ')}</p>
          <div class="project-links">
            ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += projectHTML;
  });
}

// Render UI/UX projects
function renderUIUXProjects() {
  const container = document.getElementById('uiux-projects');
  if (!container) return;

  const cardsHTML = projectsData.uiux.projects.map(project => `
    <div class="project-card project-card-clickable" onclick="parent.location='${project.link}'">
      <div class="project-card-image">
        <img src="${project.image}" alt="${project.name}">
        <div class="project-card-overlay"></div>
      </div>
      <div class="project-card-content">
        <h2 class="project-title">${project.name}${project.subtitle ? '<span class="project-subtitle">' + project.subtitle + '</span>' : ''}</h2>
        <p class="project-description">${project.description}</p>
        <p class="project-see-more">See more →</p>
      </div>
    </div>
  `).join('');

  container.innerHTML = cardsHTML;
}

// Render frontend projects
function renderFrontendProjects() {
  const container = document.getElementById('frontend-projects');
  if (!container) return;

  projectsData.frontend.projects.forEach(project => {
    const detailsHTML = project.details ? project.details.map(detail =>
      `<p class="project-detail"><strong>${detail.label}: </strong>${detail.text}</p>`
    ).join('') : '';

    const projectHTML = `
      <div class="project-card">
        <div class="project-card-image project-card-interactive" onclick="parent.location='${project.link}'">
          <img src="${project.image}" alt="${project.name}">
          <div class="project-card-overlay"></div>
        </div>
        <div class="project-card-content">
          <h2 class="project-title">${project.name}</h2>
          <p class="project-description">${project.description}</p>
          ${project.details ? '<p class="project-components">Key components:</p>' : ''}
          ${detailsHTML}
          <a href="${project.link}" class="project-action-link">Play with my chatbot →</a>
        </div>
      </div>
    `;
    container.innerHTML += projectHTML;
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderProfessionalProjects();
  renderUIUXProjects();
  renderFrontendProjects();
});
