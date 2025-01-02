import { Injectable } from '@angular/core';
import axios from 'axios';  // Importer directement Axios
import { Observable, of } from 'rxjs';
import { DPI } from '../dpi';

@Injectable({
  providedIn: 'root'
})
export class DpiService {
  private baseUrl = 'http://127.0.0.1:8000/dpi_manager/afficher_liste_dpi/';
  private token = 'a9189a7adf0aea89481e01d4523babb40ab7d241';

  constructor() {}

  // Méthode pour obtenir la liste des DPI
  getDPIList(): Observable<DPI[]> {
    const headers = {
      'Authorization': `Token ${this.token}`
    };

    return new Observable<DPI[]>((observer) => {
      axios.get<DPI[]>(this.baseUrl, { headers })
        .then((response) => {
          observer.next(response.data);  // Passer les données obtenues
          observer.complete();  // Terminer l'observable
        })
        .catch((error) => {
          observer.error(error);  // Gérer les erreurs
        });
    });
  }
}
