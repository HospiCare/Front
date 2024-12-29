import { Component } from '@angular/core';

@Component({
  selector: 'app-inf-dashboard',
  imports: [],
  template:`  <div class="app">
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
                  <svg viewBox="0 0 24 24" class="icon">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" 
                            stroke="currentColor" fill="none" stroke-width="2"/>
                  </svg>
              </button>
              <button class="icon-button">
                  <svg viewBox="0 0 24 24" class="icon">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" 
                            stroke="currentColor" fill="none" stroke-width="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="2"/>
                  </svg>
              </button>
          </div>
      </div>
  </header>

  <main class="main">
      <div class="card">
          <h1 class="card-title">Soins de Nom de patient</h1>

          <section class="section">
              <h2 class="section-title">Derinieres Ordonnances:</h2>
              <table class="table">
                  <thead>
                      <tr>
                          <th>Nom</th>
                          <th>Status</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Ordonnace1</td>
                          <td>validée</td>
                          <td>
                              <button class="icon-button">
                                  <svg viewBox="0 0 24 24" class="icon">
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                      <circle cx="12" cy="12" r="3" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                  </svg>
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>Ordonnace2</td>
                          <td>validée</td>
                          <td>
                              <button class="icon-button">
                                  <svg viewBox="0 0 24 24" class="icon">
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                      <circle cx="12" cy="12" r="3" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                  </svg>
                              </button>
                          </td>
                      </tr>
                      <tr>
                          <td>Ordonnace2</td>
                          <td>validée</td>
                          <td>
                              <button class="icon-button">
                                  <svg viewBox="0 0 24 24" class="icon">
                                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                      <circle cx="12" cy="12" r="3" 
                                            stroke="currentColor" fill="none" stroke-width="2"/>
                                  </svg>
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </section>

          <section class="section">
              <h2 class="section-title">Ajouter des soins:</h2>
              <div class="add-form">
                  <input type="text" placeholder="Soin" class="input">
                  <input type="text" placeholder="Observation" class="input">
                  <button class="button">Ajouter</button>
              </div>

              <table class="table">
                  <thead>
                      <tr>
                          <th>Soins</th>
                          <th>Observations</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>example 1</td>
                          <td>Ce TP la est un TP d'un module qui s'appelle IGL.</td>
                      </tr>
                      <tr>
                          <td>example 1</td>
                          <td>Ce TP la est un TP d'un module qui s'appelle IGL.</td>
                      </tr>
                  </tbody>
              </table>
          </section>

          <div class="save-section">
              <button class="button">Enregistrer</button>
          </div>
      </div>
  </main>
</div>
`,
  styleUrl: './inf-dashboard.component.css'
})
export class InfDashboardComponent {

}
