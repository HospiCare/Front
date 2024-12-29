import { Component } from '@angular/core';

@Component({
  selector: 'app-create-cons',
  imports: [],
  template: `
           <div class="app">
        <header class="header">
            <div class="logo">
                <svg class="logo-icon" viewBox="0 0 24 24">
                    <path d="M9 12h6 M12 9v6 M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" 
                          stroke="currentColor" fill="none" stroke-width="2"/>
                </svg>
            </div>
            <div class="user-info">
                <div class="user-details">
                    <span class="user-name">Grine Abderrahmane</span>
                    <span class="user-role">Admin</span>
                </div>
                <div class="header-actions">
                    <button class="icon-button">
                        <svg viewBox="0 0 24 24" class="icon" style="color: #FF3B30;">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" 
                                  stroke="currentColor" fill="none" stroke-width="2"/>
                        </svg>
                    </button>
                    <button class="icon-button">
                        <svg viewBox="0 0 24 24" class="icon">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" 
                                  stroke="currentColor" fill="none" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

        <main class="main">
            <h1 class="page-title">Creation de la consultation:</h1>
            
            <div class="two-column-layout">
                <!-- Left Column -->
                <div class="column">
                    <div class="card">
                        <div class="card-header">
                            <h2>Date:</h2>
                            <input type="text" value="21/09/2004" readonly class="date-input">
                        </div>
                    </div>

                    <div class="card">
                        <h2>Ajouter Ordonnance:</h2>
                        <div class="ordonnance-form">
                            <input type="text" placeholder="médicament" class="input">
                            <input type="text" placeholder="Dose" class="input">
                            <input type="text" placeholder="Durée" class="input">
                            <button class="button">Ajouter</button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Médicament</th>
                                    <th>Dose</th>
                                    <th>Durée</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>example 1</td>
                                    <td>5 mg</td>
                                    <td>2 jours</td>
                                </tr>
                                <tr>
                                    <td>example 1</td>
                                    <td>5 mg</td>
                                    <td>2 jours</td>
                                </tr>
                                <tr>
                                    <td>example 1</td>
                                    <td>5 mg</td>
                                    <td>2 jours</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="delete-button">delete</button>
                    </div>

                    <div class="card">
                        <h2>Bilan Biologique:</h2>
                        <div class="checkbox-grid">
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Bilan Sanguin</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>item 4</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Les analyses d'urines</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>item 5</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Les frottis</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="column">
                    <div class="card">
                        <h2>Bilan Radiologique:</h2>
                        <div class="checkbox-grid">
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Radiographie</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Scanner</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Mammographie</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>IRM</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox">
                                <span>Echographie</span>
                            </label>
                        </div>
                    </div>

                    <div class="card resume-card">
                        <h2>Résumé:</h2>
                        <textarea placeholder="Rédigez votre résumé sur la consultation ici..."></textarea>
                    </div>
                </div>
            </div>

            <div class="actions">
                <button class="button">Enregister</button>
            </div>
        </main>
    </div>


  `,
  styleUrl: './create-cons.component.css'
})
export class CreateConsComponent {

}
