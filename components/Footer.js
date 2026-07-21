class SiteFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-primary-container dark:bg-black w-full text-on-primary-fixed mt-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-gutter py-section-padding-desktop max-w-container-max mx-auto border-t border-surface-tint/30">
          <div class="col-span-1 md:col-span-2 space-y-4">
            <div class="font-headline-md text-headline-md text-tertiary-fixed font-bold">
              VLS
            </div>
            <p class="font-body-md text-body-md text-on-primary-container max-w-md">
              Đối tác pháp lý tin cậy của bạn. Chúng tôi cung cấp các giải pháp an toàn, hiệu quả cho mọi vấn đề pháp lý.
            </p>
          </div>
          <div>
            <h4 class="font-label-caps text-label-caps text-tertiary-fixed mb-4">Liên kết</h4>
            <ul class="space-y-2">
              <li><a class="font-body-md text-body-md text-on-primary-container hover:text-white hover:text-tertiary-fixed-dim transition-colors" href="/ve-chung-toi/">Về chúng tôi</a></li>
              <li><a class="font-body-md text-body-md text-on-primary-container hover:text-white hover:text-tertiary-fixed-dim transition-colors" href="/dich-vu/phap-che-doanh-nghiep/">Pháp chế doanh nghiệp</a></li>
              <li><a class="font-body-md text-body-md text-on-primary-container hover:text-white hover:text-tertiary-fixed-dim transition-colors" href="/dich-vu/tranh-chap-to-tung/">Tranh chấp tố tụng</a></li>
              <li><a class="font-body-md text-body-md text-on-primary-container hover:text-white hover:text-tertiary-fixed-dim transition-colors" href="/blog/">Kiến thức pháp lý</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-label-caps text-label-caps text-tertiary-fixed mb-4">Liên hệ</h4>
            <ul class="space-y-2">
              <li class="font-body-md text-body-md text-on-primary-container flex items-start gap-2">
                <span class="material-symbols-outlined text-[18px]" data-icon="location_on">location_on</span>
                Hà Nội, Việt Nam
              </li>
              <li class="font-body-md text-body-md text-on-primary-container flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]" data-icon="mail">mail</span>
                contact@vls.vn
              </li>
              <li class="font-body-md text-body-md text-on-primary-container flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]" data-icon="call">call</span>
                1900 xxxx
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-on-primary-container/20 px-gutter py-6">
          <div class="max-w-container-max mx-auto font-body-md text-body-md text-on-primary-container text-sm text-center md:text-left">
            © 2026 Vietnam Legal Services. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
