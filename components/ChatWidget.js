class ChatWidget extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="fixed bottom-6 right-6 rounded-full w-14 h-14 border-2 border-tertiary-container shadow-lg bg-primary-container text-tertiary-fixed hover:scale-110 hover:bg-hover-gold hover:text-primary-container transition-transform flex items-center justify-center z-50 cursor-pointer group">
        <span class="material-symbols-outlined" data-icon="chat">chat</span>
        <!-- Tooltip -->
        <div class="absolute right-full mr-4 bg-surface-white text-on-surface px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <div class="font-label-caps text-label-caps font-bold">VLS Support</div>
          <div class="text-sm">Chat with us</div>
        </div>
      </div>
    `;

    this.addEventListener('click', () => {
      alert('Kết nối với Zalo OA của Vietnam Legal Services...');
    });
  }
}

customElements.define('chat-widget', ChatWidget);
