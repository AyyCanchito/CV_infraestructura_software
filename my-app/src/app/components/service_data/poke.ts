import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/charizard';

  constructor(private http: HttpClient) {}

  getCharizard(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}