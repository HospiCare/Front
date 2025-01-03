import { Injectable } from '@angular/core';
import { apiClient } from '../apiService/Client';
import { Observable } from 'rxjs';
import { Consultation } from '../consultation';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private token = apiClient.auth_token; 

  constructor() {}

  // Méthode pour obtenir la liste des consultations pour un patient
  getConsultations(patientId: number): Observable<Consultation[]> {
    const headers = {
      'Authorization': `Token ${this.token}`,
    };
    const url = `consultation/${patientId}/afficher_consultations`;

    return new Observable<Consultation[]>((observer) => {
      apiClient
        .get<Consultation[]>(url)
        .then((response) => {
          observer.next(response);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
