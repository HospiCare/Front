import { Injectable } from '@angular/core';
import { apiClient } from '../apiService/Client';
import { Observable, of } from 'rxjs';
import { DPI } from '../dpi';

@Injectable({
  providedIn: 'root'
})
export class DpiService {

  constructor() {}

  // Méthode pour obtenir la liste des DPI
  getDPIList(): Observable<DPI[]> {
    const url = 'dpi_manager/afficher_liste_dpi';
    return new Observable<DPI[]>((observer) => {
      apiClient.get<DPI[]>(url)
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
