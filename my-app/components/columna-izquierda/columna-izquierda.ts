import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../service_data/data';

@Component({
  selector: 'app-columna-izquierda',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './columna-izquierda.html',
  styleUrls: ['./columna-izquierda.css']
})
export class ColumnaIzquierda {

  mostrarSoftwares = false;

  constructor(private router: Router, public dataService: DataService) {}

  toggleSoftwares() {
    this.mostrarSoftwares = !this.mostrarSoftwares;
    if (this.mostrarSoftwares) {
      this.router.navigate(['/softwares/programas']);
    } else {
      this.router.navigate(['/']);
    }
  }

}