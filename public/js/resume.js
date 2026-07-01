// Resume data structure
const resumeData = {
  skills: {
    'UI/UX': 'Figma, HTML5, CSS, JavaScript, Typescript, Vue, Dart, Flutter',
    'BACK-END DEV.': 'Python, Java, JavaScript, C, C++, SQL',
    'MACHINE LEARNING': 'Scikit-learn, TensorFlow, OpenCV, R, Pytorch',
    'DATA ANALYSIS': 'PowerBI, RapidMiner, Grafana, Pentaho',
    'SOFT SKILLS': 'Interpersonal Skills, Project Management, Leadership, Teamwork, Adaptability, Problem-Solving, Creativity'
  },

  experience: [
    {
      title: 'SOFTWARE ENGINEER - ASSESSMENT & FRONTEND ENGINEERING',
      organization: 'Stanford University',
      location: 'Stanford, California, United States',
      date: 'May 2024 - Present',
      duration: 'Full-time (2 yrs 3 mos)',
      bullets: [
        'Helped drive CATification across ROAR\'s assessment suite, including jsCAT/Clowder enhancements, adaptive assessment standardization, and integrations across multiple assessments.',
        'Led technical implementation for normed score updates across the assessment suite, including standardization and cross-team coordination.',
        'Redesigned and implemented the login flow end-to-end after identifying user-facing errors, conducting user research, proposing improvements, and shipping a major dashboard UX enhancement.',
        'Led development of the Assessment SDK and run event endpoints as part of a broader backend refactor, helping establish new architectural foundations for future assessment integrations.',
        'Translate ambiguous research, product, and psychometric requirements into clear technical implementation plans for engineers and researchers.',
        'Collaborate closely with researchers, engineers, and research partners to surface blockers early, align requirements, and improve platform reliability.',
        'Mentor and support collaborators across assessment implementation, frontend quality, adaptive testing, and maintainable software practices.'
      ]
    },
    {
      title: 'FULL STACK DEVELOPER',
      organization: 'Stanford University - ROAR',
      location: 'Stanford, California (Hybrid)',
      date: 'Nov 2023 - May 2024',
      duration: '7 months',
      description: 'Part of the Dev team at ROAR (Rapid Online Assessment of Reading), an open-access assessment platform grounded in ongoing research by the Stanford Reading & Dyslexia Research Program.',
      tech: 'Web Development, Vue.js, JavaScript, TypeScript, Firebase'
    },
    {
      title: 'SOFTWARE ENGINEER',
      organization: 'Global Nutrition Empowerment',
      location: 'Albany, OR',
      date: 'Dec 2020 - Feb 2023',
      duration: '2 yrs 3 months',
      description: 'Developed a health education app that has helped more than 500 people in Nepal and Guatemala.',
      tech: 'Figma, Dart, Mobile Development'
    },
    {
      title: 'GRADUATE RESEARCH ASSISTANT',
      organization: 'EPIC Lab at Oregon State University',
      location: 'Corvallis, OR',
      date: 'Sep 2021 - Jun 2023',
      duration: '1 yr 10 mos (Part-time)',
      description: 'Led ML chatbot project, addressing dev and user challenges. Assisted real-time diversity dashboard. Aided sensemaking in computational notebooks and designing solutions.',
      tech: 'Web Development, Figma, Python, HTML5, CSS, JavaScript'
    },
    {
      title: 'UNDERGRADUATE RESEARCH ASSISTANT',
      organization: 'Universidad de Cuenca - GIIT Group',
      location: 'Cuenca, Ecuador',
      date: 'Nov 2019 - Dec 2020',
      duration: '1 yr 2 months (Part-time)',
      bullets: [
        'Elaboration of a set of games called "Album of Memories" for older adults to train attention and memory functions in collaboration with psychologist experts.',
        'Used Visual Studio Tool with the Ionic and AngularJS framework.',
        'Deployed a Puzzle Game on the web to perform the initial experimental phase of the research.',
        'Completed systematic reviews on serious games for elderly support.',
        'Created social media web pages for the GIIT Research Group.'
      ],
      tech: 'Web Development, Typescript, AngularJS, Ionic, CSS3, HTML5, Java'
    },
    {
      title: 'SOFTWARE ENGINEER INTERN',
      organization: 'Electro Generadora del Austro',
      location: 'Cuenca, Ecuador',
      date: 'Jul 2019 - Sep 2019',
      duration: '3 months (Full-time)',
      description: 'TIC department Assistant with client support responsibilities.',
      tech: 'Java'
    },
    {
      title: 'SOFTWARE ENGINEER INTERN',
      organization: 'iDRHICA Universidad de Cuenca',
      location: 'Cuenca, Ecuador',
      date: 'Jul 2018 - Sep 2018',
      duration: '3 months (Full-time)',
      description: 'Project: Software to measure the level of Santa Barbara River. Developed software in Visual Basic using HEC-RAS and extracted data to calculate Manning coefficient for river flow roughness analysis.',
      tech: ''
    }
  ]
};

// Render skills section
function renderSkills() {
  const container = document.querySelector('.skills');
  if (!container) return;

  let html = '<h2 class="context">SKILLS</h2>';
  for (const [category, skills] of Object.entries(resumeData.skills)) {
    html += `<p class="enfasis2"><strong>${category}</strong>${skills}</p>`;
  }
  container.innerHTML = html;
}

// Render work experience
function renderExperience() {
  const container = document.querySelector('.work-experience');
  if (!container) return;

  let html = '<h2 class="context">WORK EXPERIENCE</h2>';

  resumeData.experience.forEach(job => {
    html += `
      <p class="enfasis"><strong>${job.title}</strong></p>
      <p class="where">${job.organization}    &emsp;&ensp;&ensp;  ${job.location}</p>
      <p class="sub"><strong>${job.date}</strong> · ${job.duration}</p>
    `;

    if (job.bullets) {
      html += `<ul style="padding-left: 40px; color: #4a5568; margin: 10px 0;">
        ${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>`;
    }

    if (job.description) {
      html += `<p class="sub">${job.description}${job.tech ? ' <br> ' + job.tech : ''}</p>`;
    }
  });

  container.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  renderExperience();
});
