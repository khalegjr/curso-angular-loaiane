import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) {}

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(delay(2000), tap(console.log));
  }
}
