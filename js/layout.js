// Shared layout components

const layoutComponents = {
  // Navigation configuration
  nav: {
    brand: 'Emily Arteaga-Garcia',
    links: [
      { text: 'Home', url: 'index.html' },
      { text: 'Projects', url: 'projects.html' },
      { text: 'Resume', url: 'resume.html' },
      { text: 'Contact', url: 'contact.html' }
    ]
  },

  // Footer configuration
  footer: {
    connectText: 'Let\'s connect:',
    social: [
      {
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/emilyarteagag/'
      },
      {
        icon: 'fa-github',
        url: 'https://github.com/Emily-ejag'
      }
    ],
    copyright: '© 2026 Emily Arteaga Garcia • Built with ❤️ and Code'
  }
};

// Render header on all pages
function renderHeader() {
  const headerElement = document.querySelector('.main-header');
  if (!headerElement) return;

  const navHTML = layoutComponents.nav.links
    .map(link => `<li><a href="${link.url}">${link.text}</a></li>`)
    .join('');

  headerElement.innerHTML = `
    <p class="header-name" onclick="parent.location='index.html'"><strong>Emily</strong> Arteaga-Garcia</p>
    <section class="main-menu">
      <ul>${navHTML}</ul>
    </section>
  `;
}

// Render footer on all pages
function renderFooter() {
  const footerElement = document.querySelector('.main-footer');
  if (!footerElement) return;

  const socialHTML = layoutComponents.footer.social
    .map(item => `<a href="${item.url}" target="_blank"><i class="fa ${item.icon} fa-3x" aria-hidden="true"></i></a>`)
    .join('');

  footerElement.innerHTML = `
    <p class="connect">${layoutComponents.footer.connectText}</p>
    ${socialHTML}
    <p class="rights">${layoutComponents.footer.copyright}</p>
  `;
}

// Initialize layout on page load
document.addEventListener('DOMContentLoaded', function() {
  renderHeader();
  renderFooter();
});
