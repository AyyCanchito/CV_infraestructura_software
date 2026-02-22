import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-columna-izquierda',
  standalone: true,
  imports: [NgIf],
  templateUrl: './columna-izquierda.html',
  styleUrls: ['./columna-izquierda.css']
})
export class ColumnaIzquierda {

  mostrarSoftwares = false;

  constructor(private router: Router) {}

  toggleSoftwares() {
    this.mostrarSoftwares = !this.mostrarSoftwares;

    if (this.mostrarSoftwares) {
      this.router.navigate(['/softwares/programas']);
    } else {
      this.router.navigate(['/']);
    }
  }

}