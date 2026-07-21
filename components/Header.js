class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white/80 dark:bg-primary-container/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm transition-transform duration-200">
        <div class="flex justify-between items-center px-gutter max-w-container-max mx-auto h-20">
          <div class="font-headline-md text-headline-md font-bold text-tertiary-container">
            VLS Vietnam Legal Services
          </div>
          <!-- Desktop Nav -->
          <ul class="hidden md:flex items-center gap-stack-lg">
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/">Trang chủ</a></li>
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/ve-chung-toi/">Về chúng tôi</a></li>
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/dich-vu/phap-che-doanh-nghiep/">Pháp chế Doanh nghiệp</a></li>
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/dich-vu/tranh-chap-to-tung/">Tranh chấp Tố tụng</a></li>
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/blog/">Kiến thức Pháp lý</a></li>
            <li><a class="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed-variant hover:text-tertiary-container transition-colors hover:text-hover-gold duration-300" href="/lien-he/">Liên hệ</a></li>
          </ul>
          <a href="/lien-he/" class="hidden md:inline-flex items-center justify-center bg-tertiary-container text-primary-container font-button text-button rounded-md px-6 py-3 min-h-[48px] hover:bg-hover-gold transition-colors">
            Tư vấn ngay
          </a>
          <!-- Mobile Menu Button -->
          <button class="md:hidden text-on-surface p-2" id="mobile-menu-btn">
            <span class="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>
      <!-- Mobile Nav Fallback -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 flex flex-col gap-6 items-center">
        <a class="text-xl text-on-surface" href="/">Trang chủ</a>
        <a class="text-xl text-on-surface" href="/ve-chung-toi/">Về chúng tôi</a>
        <a class="text-xl text-on-surface" href="/dich-vu/phap-che-doanh-nghiep/">Pháp chế Doanh nghiệp</a>
        <a class="text-xl text-on-surface" href="/dich-vu/tranh-chap-to-tung/">Tranh chấp Tố tụng</a>
        <a class="text-xl text-on-surface" href="/blog/">Kiến thức Pháp lý</a>
        <a class="text-xl text-on-surface" href="/lien-he/">Liên hệ</a>
        <button id="close-menu-btn" class="mt-8 text-on-surface p-4 border border-outline rounded-full">Đóng</button>
      </div>
    `;

    // Active state highlighting
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('ul a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      // basic matching
      if (currentPath === href || (currentPath.startsWith(href) && href !== '/')) {
        link.classList.remove('text-on-surface', 'dark:text-on-primary-fixed-variant');
        link.classList.add('text-tertiary-container', 'font-bold', 'border-b-2', 'border-tertiary-container', 'pb-1');
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
