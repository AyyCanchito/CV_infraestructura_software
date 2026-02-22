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
    this.router.navigate(['/mi-historia']).then(() => {
      document.getElementById('mi-historia')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  scrollToHabilidades() {
    this.router.navigate(['/habilidades']).then(() => {
      document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  scrollToProyectos() {
    this.router.navigate(['/proyectos-personales']).then(() => {
      document.getElementById('proyectos-personales')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

}