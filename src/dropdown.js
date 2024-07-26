import './styles.css';

// dropdown class for creating multiple dropdowns
class Dropdown {
    constructor(element) {
        this.dropdown = element;
        this.toggle = this.dropdown.querySelector('.dropdown-button');
        this.menu = this.dropdown.querySelector('.dropdown-content');
        this.icon = this.dropdown.querySelector('.dropdown-icon');


        this.bindEvents();
    }

    bindEvents() {
        this.toggle.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.menu.classList.toggle('visible');
    }
}

// Manages dropdown creation
class DropdownManager {
    constructor() {
        this.dropdowns = [];
    }

    // initializes all dropdown
    initialize() {
        document.querySelectorAll('.dropdown-container').forEach(dropdown => {
            this.dropdowns.push(new Dropdown(dropdown));
        })
    }
}
export { DropdownManager };
