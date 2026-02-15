import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { ColumnaDerecha } from '../../components/columna-derecha/columna-derecha'
import { ColumnaIzquierda } from '../../components/columna-izquierda/columna-izquierda'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ColumnaDerecha, ColumnaIzquierda],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
