import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { apiClient } from '../apiService/Client';
export type BilanType = 'Bilan sanguin' | 'Bilan d\'urine' | 'Bilan hepatique' | 'Bilan renal';

export interface BilanResponse {
  id_bilan: number;
  type_bilan: BilanType;
  date_creation_consultation: string;
  patient: {
    id: number;
    nom: string;
    prenom: string;
  };
  medecin: {
    email: string;
  } | null;
  graphique: any;
  resultat: string;
}

@Injectable({
  providedIn: 'root'
})
export class BilanService {
  private token = apiClient.auth_token;
  private baseUrl = 'http://127.0.0.1:8000'; // Adjust this to match your API URL

  private axiosInstance = axios.create({
    baseURL: this.baseUrl,
    headers: {
      'Authorization': `Token ${this.token}`
    }
  });

  constructor() {}

  getBilansList(): Observable<BilanResponse[]> {
    const headers = {
      'Authorization': `Token ${this.token}`
    };

    return from(
      axios.get<BilanResponse[]>(`${this.baseUrl}/bilans/`, { headers })
        .then(response => response.data)
    );
  }

  getBilanById(id: number): Observable<BilanResponse> {
    return from(
      this.axiosInstance.get<BilanResponse>(`/bilans/${id}/`)
        .then(response => response.data)
    );
  }

  updateBilanResults(id: number, results: any): Observable<any> {
    return from(
      this.axiosInstance.put(`/bilans/${id}/remplir/`, {
        result: results
      }).then(response => response.data)
    );
  }
}