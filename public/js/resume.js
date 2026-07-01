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
      title: 'SOFTWARE ENGINEER - FRONTEND & ASSESSMENT ENGINEERING',
      organization: 'Stanford University - ROAR Literacy Assessment',
      location: 'Stanford, California, United States',
      date: 'Nov 2023 - Present',
      duration: 'Full-time (3 years)',
      bullets: [
        'Lead frontend and assessment app development for research-based literacy tools used by schools, districts, and researchers across the Stanford Reading & Dyslexia Research Program.',
        'Built and maintained Vue/TypeScript applications for scalable web-based literacy assessments, score reports, and school-facing dashboards serving hundreds of educators and students.',
        'Redesigned and implemented the login flow end-to-end, conducting user research and shipping a major UX enhancement with SSO auto-detection and fallback authentication.',
        'Led technical implementation of normed scores and adaptive assessment standardization (CAT/jsCAT), coordinating across research, engineering, and psychometric teams.',
        'Developed Assessment SDK and event endpoints, establishing architectural foundations for future assessment integrations and research infrastructure.',
        'Translated ambiguous research and psychometric requirements into clear technical implementation plans for engineers and researchers.',
        'Mentored collaborators across assessment implementation, frontend quality, adaptive testing, and maintainable software practices.'
      ],
      tech: 'Vue.js, TypeScript, Firebase, Python, SQL, HTML5, CSS'
    },
    {
      title: 'SOFTWARE ENGINEER',
      organization: 'Global Nutrition Empowerment',
      location: 'Albany, OR',
      date: 'Dec 2020 - Feb 2023',
      duration: '2 yrs 3 months',
      bullets: [
        'Developed a health education app that has helped more than 500 people in Nepal and Guatemala.'
      ],
      tech: 'Figma, Dart, Mobile Development'
    },
    {
      title: 'GRADUATE RESEARCH ASSISTANT',
      organization: 'EPIC Lab at Oregon State University',
      location: 'Corvallis, OR',
      date: 'Sep 2021 - Jun 2023',
      duration: '1 yr 10 mos (Part-time)',
      bullets: [
        'Led ML chatbot project, addressing developer and user challenges through iterative research and implementation.',
        'Assisted in real-time diversity dashboard development for tracking open-source software communities.',
        'Aided sensemaking research in computational notebooks and designed solutions for data analysis workflows.'
      ],
      tech: 'Web Development, Figma, Python, HTML5, CSS, JavaScript'
    },
    {
      title: 'UNDERGRADUATE RESEARCH ASSISTANT',
      organization: 'Universidad de Cuenca - GIIT Group',
      location: 'Cuenca, Ecuador',
      date: 'Nov 2019 - Dec 2020',
      duration: '1 yr 2 months (Part-time)',
      bullets: [
        'Elaborated a set of games called "Album of Memories" for older adults to train attention and memory functions in collaboration with psychologist experts.',
        'Used Visual Studio Tool with the Ionic and AngularJS framework for cross-platform development.',
        'Deployed a Puzzle Game on the web to perform the initial experimental phase of the research.',
        'Completed systematic reviews on serious games for elderly support.',
        'Created social media web pages for the GIIT Research Group.'
      ],
      tech: 'Web Development, TypeScript, AngularJS, Ionic, CSS3, HTML5, Java'
    },
    {
      title: 'SOFTWARE ENGINEER INTERN',
      organization: 'Electro Generadora del Austro',
      location: 'Cuenca, Ecuador',
      date: 'Jul 2019 - Sep 2019',
      duration: '3 months (Full-time)',
      bullets: [
        'Provided TIC department assistance with client support responsibilities and system maintenance.'
      ],
      tech: 'Java'
    },
    {
      title: 'SOFTWARE ENGINEER INTERN',
      organization: 'iDRHICA Universidad de Cuenca',
      location: 'Cuenca, Ecuador',
      date: 'Jul 2018 - Sep 2018',
      duration: '3 months (Full-time)',
      bullets: [
        'Developed software to measure the level of Santa Barbara River using HEC-RAS modeling.',
        'Extracted hydrological data and calculated Manning coefficient for river flow roughness analysis.'
      ],
      tech: 'Visual Basic, HEC-RAS'
    }
  ]
};

// Render skills section
function renderSkills() {
  const container = document.querySelector('.skills');
  if (!container) return;

  let html = '<h2 class="context">SKILLS</h2>';
  for (const [category, skills] of Object.entries(resumeData.skills)) {
    html += `<p class="enfasis2"><strong>${category}</strong> — ${skills}</p>`;
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
      <p class="job-title"><strong>${job.title}</strong></p>
      <p class="job-org">${job.organization} <span class="job-location">·</span> ${job.location}</p>
      <p class="job-meta"><strong>${job.date}</strong> · ${job.duration}</p>
    `;

    if (job.bullets) {
      html += `<ul class="job-bullets">
        ${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>`;
    }

    if (job.tech) {
      html += `<p class="job-tech"><strong>Tech:</strong> ${job.tech}</p>`;
    }
  });

  container.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderSkills();
  renderExperience();
});
