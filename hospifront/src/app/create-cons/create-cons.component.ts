import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cons',
  imports: [],
  template: `
    <!-- ... keep header section the same ... -->

    <main class="main">
        <h1 class="page-title">Creation de la consultation:</h1>
        
        <div class="two-column-layout">
            <!-- Left Column -->
            <div class="column">
                <div class="card">
                    <div class="date-section">
                        <label>Date:</label>
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
                            <tr 
                                [class.selected]="selectedRow === 0"
                                (click)="selectRow(0)"
                            >
                                <td>example 1</td>
                                <td>5 mg</td>
                                <td>2 jours</td>
                            </tr>
                            <tr 
                                [class.selected]="selectedRow === 1"
                                (click)="selectRow(1)"
                            >
                                <td>example 1</td>
                                <td>5 mg</td>
                                <td>2 jours</td>
                            </tr>
                            <tr 
                                [class.selected]="selectedRow === 2"
                                (click)="selectRow(2)"
                            >
                                <td>example 1</td>
                                <td>5 mg</td>
                                <td>2 jours</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="delete-button-container">
                        <button class="delete-button">delete</button>
                    </div>

                    <div class="infirmier-section">
                        <h3>Ajouter infirmier:</h3>
                        <select class="select-input">
                            <option value="">Sélectionner un infirmier</option>
                            <option value="mrOmar">Mr Omar</option>
                        </select>
                    </div>
                </div>

                <div class="card">
                    <h2>Bilan Biologique:</h2>
                    <div class="radio-grid">
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Bilan Sanguin</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>item 4</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Les analyses d'urines</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>item 5</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Les frottis</span>
                        </label>
                    </div>
                    <div class="select-container">
                        <select class="select-input">
                            <option value="">Sélectionner un laboratin</option>
                            <option value="mrOmar">Mr Omar</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="column">
                <div class="card">
                    <h2>Bilan Radiologique:</h2>
                    <div class="radio-grid">
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Radiographie</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Scanner</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Mammographie</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>IRM</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="bilan">
                            <span>Echographie</span>
                        </label>
                    </div>
                    <div class="select-container">
                        <select class="select-input">
                            <option value="">Sélectionner un radiologue</option>
                            <option value="mrOmar">Mr Omar</option>
                        </select>
                    </div>
                </div>

                <div class="card resume-card">
                    <h2>Résumé:</h2>
                    <textarea 
                        class="resume-textarea"
                        placeholder="Rédigez votre résumé sur la consultation ici...">
                    </textarea>
                </div>

                <div class="actions">
                    <button class="button">Enregistrer</button>
                </div>
            </div>
        </div>
    </main>
  `,
  styleUrls: ['./create-cons.component.css']
})
export class CreateConsComponent {
    patient: Patient | undefined;

  constructor(private router: Router) {
    // Get the patient data from router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.patient = navigation.extras.state['patient'];
    }
  }

  ngOnInit() {
    if (!this.patient) {
      // Handle case when no patient data is available
      this.router.navigate(['/dpi-list']);
    }
    console.log(this.patient)
  }
    selectedRow: number | null = null;

  selectRow(index: number) {
    this.selectedRow = this.selectedRow === index ? null : index;
  }

}
