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

  constructor() {}

  getBilansList(): Observable<BilanResponse[]> {
    const url = `${this.baseUrl}/afficher_liste_bilans/`; // Adjust the endpoint path as needed
    const headers = {
      'Authorization': `Token ${this.token}`
    };

    return from(
      axios.get<BilanResponse[]>(url, { headers })
        .then(response => response.data)
    );
  }
}