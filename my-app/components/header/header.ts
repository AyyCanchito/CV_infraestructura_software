import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {

  constructor(private location: Location) {}

  scrollToSection() {
    const el = document.getElementById('mi-historia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.location.replaceState('/mi-historia');
    }
  }

  scrollToHabilidades() {
    const el = document.getElementById('habilidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '/habilidades');
    }
  }

  scrollToProyectos() {
    const el = document.getElementById('proyectos-personales');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '/proyectos-personales');
    }
  }

}
