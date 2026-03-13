import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { PokeService } from '../../src/app/components/service_data/poke';
import { GithubService } from '../../src/app/components/service_data/github';

@Component({
  selector: 'app-columna-derecha',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe],
  templateUrl: './columna-derecha.html',
  styleUrls: ['./columna-derecha.css']
})
export class ColumnaDerecha implements OnInit {

  repos: any[] = [];
  charizard: any = null

  constructor(
    private githubService: GithubService,
    private pokeService: PokeService
  ) {}

  ngOnInit() {
    this.githubService.getRepos().subscribe(data => {
      this.repos = data.slice(0, 3);
    });

  this.pokeService.getCharizard().subscribe(data => {
    this.charizard = data;
  });
  }

}