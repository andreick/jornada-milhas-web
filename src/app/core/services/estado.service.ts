import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private readonly apiUrl: string = environment.apiUrl;

  private cache$?: Observable<Estado[]>;

  constructor(
    private http: HttpClient,
  ) { }

  fetch(): Observable<Estado[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Estado[]>(`${this.apiUrl}/estados`)
        .pipe(shareReplay(1));
    }
    return this.cache$;
  }

}
