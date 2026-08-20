const header = document.querySelector('[data-site-header]');
const footer = document.querySelector('[data-site-footer]');
const page = window.location.pathname.split('/').pop() || 'index.html';

if (header) {
  header.innerHTML = `<header class="site-header"><div class="container header-inner"><a class="brand" href="index.html"><span class="brand-mark">L</span><span><strong>LEKABE</strong><small>ENGINEERING SERVICES & PROJECTS</small></span></a><button class="menu-toggle" aria-label="Open navigation">☰</button><nav class="nav"><a class="${page === 'index.html' ? 'active' : ''}" href="index.html">Home</a><a class="${page === 'about.html' ? 'active' : ''}" href="about.html">About us</a><a class="${page === 'services.html' ? 'active' : ''}" href="services.html">Services</a><a class="${page === 'portfolio.html' ? 'active' : ''}" href="portfolio.html">Portfolio</a><a class="${page === 'sheq.html' ? 'active' : ''}" href="sheq.html">Safety</a><a class="${page === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a><a class="header-cta" href="contact.html#rfq">Request a quote</a></nav></div></header>`;
  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.nav');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}

if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark">L</span><span><strong>LEKABE</strong><small>ENGINEERING SERVICES & PROJECTS</small></span></a><p style="margin-top:20px;max-width:230px">Precision engineering and technical excellence for Africa's heavy industries.</p></div><div><h3>Explore</h3><a href="about.html">About us</a><a href="services.html">Services</a><a href="portfolio.html">Portfolio</a><a href="sheq.html">Safety</a></div><div><h3>Compliance</h3><p>CIPC: 2015/330833/07</p><p>CSD: MAAA072108</p><p>CIDB: 10166943</p><a href="company-profile.pdf">Download company profile ↗</a></div><div><h3>Rustenburg HQ</h3><p>Plot 307 JQ, Hexriver Industrial Park, Waterval Ave</p><a href="tel:0145380637">014 538 0637</a><a href="mailto:info@lekabeengineering.co.za">info@lekabeengineering.co.za</a></div></div><div class="footer-bottom"><span>© 2024 Lekabe Engineering Services and Projects (Pty) Ltd</span><span>Built for better outcomes.</span></div></div></footer>`;
}

const whatsapp = document.createElement('a');
whatsapp.className = 'whatsapp-button';
whatsapp.href = 'https://wa.me/27727432744?text=Hello%20Lekabe%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20project.';
whatsapp.target = '_blank';
whatsapp.rel = 'noopener';
whatsapp.title = 'Chat with Lekabe Engineering on WhatsApp';
whatsapp.setAttribute('aria-label', 'Chat with Lekabe Engineering on WhatsApp');
whatsapp.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.1.55 4.14 1.6 5.94L.1 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.65-.23-.38a9.9 9.9 0 1 1 8.4 4.64Zm5.43-7.43c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.1 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"/></svg><span>WhatsApp us</span>';
document.body.appendChild(whatsapp);

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  document.querySelectorAll('.gallery-item').forEach((item) => { item.style.display = category === 'all' || item.dataset.category === category ? '' : 'none'; });
}));

const form = document.querySelector('.rfq-form');
if (form) form.addEventListener('submit', (event) => { event.preventDefault(); form.querySelector('.form-message').textContent = 'Thank you. Your enquiry is ready for the Lekabe team.'; form.reset(); });