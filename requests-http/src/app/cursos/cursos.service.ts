import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(tap(console.log));
  }
}
