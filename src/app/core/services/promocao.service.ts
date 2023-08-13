import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Promocao } from '../models/promocao';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  fetch(): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }

}
