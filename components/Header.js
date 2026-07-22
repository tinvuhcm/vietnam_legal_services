class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white/95 dark:bg-primary-container/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm transition-all duration-200">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <!-- Top Row: Logo / Brand Name -->
          <div class="flex justify-between items-center pb-2 border-b border-outline-variant/15 md:border-b-0">
            <a href="/" class="flex items-center gap-3 group">
              <!-- Placeholder logo box for future image replacement -->
              <div class="w-9 h-9 rounded-lg bg-tertiary-container text-primary-container flex items-center justify-center font-bold font-headline-lg text-xl shadow-sm group-hover:scale-105 transition-transform">
                VLS
              </div>
              <span class="font-headline-md text-xl md:text-2xl font-bold text-primary-container dark:text-tertiary-fixed tracking-tight group-hover:text-tertiary-container transition-colors">
                Vietnam Legal Services
              </span>
            </a>

            <!-- Mobile Menu Trigger -->
            <button class="md:hidden text-on-surface p-2 hover:bg-surface-container rounded-lg transition-colors" id="mobile-menu-btn" aria-label="Toggle navigation">
              <span class="material-symbols-outlined text-2xl" data-icon="menu">menu</span>
            </button>
          </div>

          <!-- Bottom Row: Desktop Navigation Menu & Action Button -->
          <div class="hidden md:flex justify-between items-center pt-2 mt-1 border-t border-outline-variant/20">
            <ul class="flex items-center gap-6 lg:gap-8 whitespace-nowrap">
              <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-200 py-1 inline-block" href="/">Trang chủ</a></li>
              <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-200 py-1 inline-block" href="/ve-chung-toi/">Về chúng tôi</a></li>
              <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-200 py-1 inline-block" href="/dich-vu/phap-che-doanh-nghiep/">Pháp chế Doanh nghiệp</a></li>
              <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-200 py-1 inline-block" href="/dich-vu/tranh-chap-to-tung/">Tranh chấp Tố tụng</a></li>
              <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-200 py-1 inline-block" href="/blog/">Kiến thức Pháp lý</a></li>
            </ul>

            <a href="/lien-he/" class="inline-flex items-center justify-center bg-tertiary-container text-primary-container font-button text-sm rounded-md px-5 py-2 hover:bg-hover-gold transition-all whitespace-nowrap shadow-sm hover:shadow">
              Tư vấn ngay
            </a>
          </div>
        </div>
      </nav>

      <!-- Mobile Nav Drawer -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-50 bg-surface-white dark:bg-primary-container pt-20 px-6 flex flex-col justify-between pb-8">
        <div class="space-y-4 text-center">
          <div class="pb-4 border-b border-outline-variant/30">
            <span class="font-headline-md text-2xl font-bold text-tertiary-container">Vietnam Legal Services</span>
          </div>
          <ul class="flex flex-col gap-4 font-body-md text-lg text-primary-container dark:text-on-primary">
            <li><a class="block py-2 hover:text-tertiary-container" href="/">Trang chủ</a></li>
            <li><a class="block py-2 hover:text-tertiary-container" href="/ve-chung-toi/">Về chúng tôi</a></li>
            <li><a class="block py-2 hover:text-tertiary-container" href="/dich-vu/phap-che-doanh-nghiep/">Pháp chế Doanh nghiệp</a></li>
            <li><a class="block py-2 hover:text-tertiary-container" href="/dich-vu/tranh-chap-to-tung/">Tranh chấp Tố tụng</a></li>
            <li><a class="block py-2 hover:text-tertiary-container" href="/blog/">Kiến thức Pháp lý</a></li>
          </ul>
        </div>

        <div class="space-y-3">
          <a href="/lien-he/" class="w-full inline-flex items-center justify-center bg-tertiary-container text-primary-container font-button text-base font-semibold rounded-lg py-3 hover:bg-hover-gold transition-colors">
            Tư vấn ngay
          </a>
          <button id="close-menu-btn" class="w-full text-secondary py-3 border border-outline-variant/50 rounded-lg text-sm">
            Đóng Menu
          </button>
        </div>
      </div>
    `;

    // Active link highlighting logic
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('ul a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath === href || (href !== '/' && currentPath.startsWith(href))) {
        link.classList.remove('text-on-surface', 'dark:text-on-primary-fixed-variant');
        link.classList.add('text-tertiary-container', 'font-bold', 'border-b-2', 'border-tertiary-container');
      }
    });

    const menuBtn = this.querySelector('#mobile-menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');
    const closeBtn = this.querySelector('#close-menu-btn');
    
    if (menuBtn && mobileMenu && closeBtn) {
      menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
      closeBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    }
  }
}

customElements.define('site-header', SiteHeader);
