import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/api/carro';

  constructor() {}

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/findAll');
  }

  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(this.API + '/findById' + id);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.API + '/deleteById' + id);
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API + '/save', carro);
  }

  update(carro: Carro, id: number): Observable<Carro> {
    return this.http.put<Carro>(this.API + '/update' + id, carro);
  }
}
