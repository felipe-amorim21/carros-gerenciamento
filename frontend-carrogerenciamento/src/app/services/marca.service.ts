import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/api/marca';

  constructor() {}

  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.API}/findAll`);
  }

  findById(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.API}/findById/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/deleteById/${id}`);
  }

  save(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(`${this.API}/save`, marca);
  }

  update(id: number, marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(`${this.API}/update/${id}`, marca);
  }
}
