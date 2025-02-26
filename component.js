class CustomFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <p>&copy; 2025 Turismo en El Salvador | Desarrollado por Brian Romero y Alfredo Medrano</p>
        </footer>
      `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  