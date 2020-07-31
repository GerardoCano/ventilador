class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Cano Zamarripa Gerardo.`;
    }
}
customElements.define("mi-footer", MiFooter);



