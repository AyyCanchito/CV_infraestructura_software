import { Component } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../service_data/data';
import { LowercaseVowelsPipe } from '../../src/app/pipes/lowercase-vowels-pipe';
import { ReversePipe } from '../../src/app/pipes/reverse-pipe';

@Component({
  selector: 'app-columna-izquierda',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, LowercaseVowelsPipe, ReversePipe],
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