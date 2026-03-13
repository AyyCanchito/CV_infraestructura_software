import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { GithubService } from '../../src/app/components/service_data/github';

@Component({
  selector: 'app-columna-derecha',
  standalone: true,
  imports: [NgFor],
  templateUrl: './columna-derecha.html',
  styleUrls: ['./columna-derecha.css']
})
export class ColumnaDerecha implements OnInit {

  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getRepos().subscribe(data => {
      this.repos = data.slice(0, 3);
    });
  }

}