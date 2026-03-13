import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  constructor(private router: Router) {}

  scrollToSection() {
    window.history.replaceState(null, '', '/mi-historia');
    document.getElementById('mi-historia')?.scrollIntoView({ behavior: 'smooth' });
}

scrollToHabilidades() {
    window.history.replaceState(null, '', '/habilidades');
    document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' });
}

scrollToProyectos() {
    window.history.replaceState(null, '', '/proyectos-personales');
    document.getElementById('proyectos-personales')?.scrollIntoView({ behavior: 'smooth' });
}

scrollToProyectosGithub() {
    window.history.replaceState(null, '', '/proyectos-github');
    document.getElementById('proyectos-github')?.scrollIntoView({ behavior: 'smooth' });
}
    
  }