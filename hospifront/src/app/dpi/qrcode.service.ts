import { Injectable } from '@angular/core';
import axios from 'axios';  // Importer Axios
import { Observable, from } from 'rxjs'; // Importation de from pour convertir la promesse en Observable
import { apiClient } from '../apiService/Client';

@Injectable({
  providedIn: 'root',
})
export class QRCodeService {
  private token = apiClient.auth_token;  // Remplacez cela par la manière dont vous gérez votre token

  constructor() {}

  /**
   * Recherche par QR Code.
   * @param file - Le fichier QR code à envoyer.
   * @returns Observable contenant la réponse du backend.
   */
  searchByQRCode(file: File): Observable<any> {
    const url = 'http://127.0.0.1:8000/dpi_manager/rechercher_dpi_par_QRcode/';
    const formData = new FormData();
    formData.append('qr_code', file);
    console.log('Fichier ajouté à FormData:', formData.get('qr_code'));

    const headers = {
      'Authorization': `Token ${this.token}`,  
    };

    return from(
      axios.post(url, formData, { headers })
    );
  }
}
