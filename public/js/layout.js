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
        url: 'https://www.linkedin.com/in/emilyarteagag/',
        label: 'LinkedIn'
      },
      {
        icon: 'fa-github',
        url: 'https://github.com/Emily-ejag',
        label: 'GitHub'
      }
    ],
    copyright: '(c) 2026 Emily Arteaga Garcia | Built with care and code'
  }
};

// Render header on all pages
function renderHeader() {
  const headerElement = document.querySelector('.main-header');
  if (!headerElement) return;

  let currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (!currentPage.includes('.')) currentPage = 'index.html';
  const navHTML = layoutComponents.nav.links
    .map(link => {
      const active = link.url === currentPage ? ' aria-current="page"' : '';
      return `<li><a href="${link.url}"${active}>${link.text}</a></li>`;
    })
    .join('');

  headerElement.innerHTML = `
    <a class="header-name" href="index.html"><strong>Emily</strong> Arteaga-Garcia</a>
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
    .map(item => `<a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}"><i class="fa ${item.icon}" aria-hidden="true"></i></a>`)
    .join('');

  footerElement.innerHTML = `
    <p class="connect">${layoutComponents.footer.connectText}</p>
    <div class="footer-social">${socialHTML}</div>
    <p class="rights">${layoutComponents.footer.copyright}</p>
  `;
}

// Initialize layout on page load
document.addEventListener('DOMContentLoaded', function() {
  renderHeader();
  renderFooter();
});
