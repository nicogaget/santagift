import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadeau } from '../interfaces/cadeau.interface';

@Injectable({
  providedIn: 'root',
})
export class CadeauService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Cadeau[]> {
    return this.httpClient.get<Cadeau[]>(`${environment.apiBaseUrl}/gifts`);
  }

  create(cadeau: Cadeau): Observable<Cadeau> {
    return this.httpClient.post<Cadeau>(
      `${environment.apiBaseUrl}/gifts`,
      cadeau
    );
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.apiBaseUrl}/gifts/${id}`);
  }

  update(cadeau: Cadeau): Observable<Cadeau> {
    return this.httpClient.put<Cadeau>(
      `${environment.apiBaseUrl}/gifts`,
      cadeau
    );
  }
}
