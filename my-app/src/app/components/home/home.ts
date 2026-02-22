import { Component } from '@angular/core';
import { Header } from '../../../../components/header/header';
import { ColumnaIzquierda } from '../../../../components/columna-izquierda/columna-izquierda';
import { ColumnaDerecha } from '../../../../components/columna-derecha/columna-derecha';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, ColumnaIzquierda, ColumnaDerecha, RouterOutlet],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}