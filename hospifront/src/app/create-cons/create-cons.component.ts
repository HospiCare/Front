import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Medicament } from '../medicament';
import { BilanBio } from '../bilan-bio';
import { BilanRadio } from '../bilan-radio';
import { Ordonnance } from '../ordonnance';
import { Consultation } from '../consultation';
import { DPIListComponent } from '../dpi-list/dpi-list.component';
import { Soins } from '../soins';

@Component({
  selector: 'app-create-cons',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <main class="main">
        <h1 class="page-title">Creation de la consultation:</h1>
        
        <div class="two-column-layout">
            <!-- Left Column -->
            <div class="column">
                <div class="card">
                    <div class="date-section">
                        <label>Date:</label>
                        <input type="text" [value]="currentDate" readonly class="date-input">
                    </div>
                </div>

                <div class="card">
                    <h2>Ajouter Ordonnance:</h2>
                    <div class="ordonnance-form">
                        <input 
                            type="text" 
                            placeholder="médicament" 
                            class="input"
                            [(ngModel)]="nouveauMedicament.nom"
                            #nomInput="ngModel"
                            required>
                        <input 
                            type="number" 
                            placeholder="Dose" 
                            class="input"
                            [(ngModel)]="nouveauMedicament.dose"
                            #doseInput="ngModel"
                            min="1"
                            required>
                        <input 
                            type="number" 
                            placeholder="Durée" 
                            class="input"
                            [(ngModel)]="nouveauMedicament.duree"
                            #dureeInput="ngModel"
                            min="1"
                            required>
                        <button 
                            class="button"
                            (click)="ajouterMedicament()"
                            [disabled]="!nomInput.valid || !doseInput.valid || !dureeInput.valid || nouveauMedicament.dose <= 0 || nouveauMedicament.duree <= 0">
                            Ajouter
                        </button>
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
                            @for (medicament of medicaments; track medicament.nom; let i = $index) {
                                <tr 
                                    [class.selected]="selectedRow === i"
                                    (click)="selectRow(i)"
                                >
                                    <td>{{medicament.nom}}</td>
                                    <td>{{medicament.dose}}</td>
                                    <td>{{medicament.duree}}</td>
                                </tr>
                            }
                        </tbody>
                    </table>

                    <div class="delete-button-container">
                        <button 
                            class="delete-button"
                            [disabled]="selectedRow === null"
                            (click)="supprimerMedicament()">
                            Supprimer
                        </button>
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
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Bilan Sanguin'"
                                   [(ngModel)]="selectedBilanBioType"
                                   (change)="onBilanBioChange()">
                            <span>Bilan Sanguin</span>
                        </label>
                       
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Les analyses d\\'urines'"
                                   [(ngModel)]="selectedBilanBioType"
                                   (change)="onBilanBioChange()">
                            <span>Les analyses d'urines</span>
                        </label>
                       
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Les frottis'"
                                   [(ngModel)]="selectedBilanBioType"
                                   (change)="onBilanBioChange()">
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
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Radiographie'"
                                   [(ngModel)]="selectedBilanRadioType"
                                   (change)="onBilanRadioChange()">
                            <span>Radiographie</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Scanner'"
                                   [(ngModel)]="selectedBilanRadioType"
                                   (change)="onBilanRadioChange()">
                            <span>Scanner</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Mammographie'"
                                   [(ngModel)]="selectedBilanRadioType"
                                   (change)="onBilanRadioChange()">
                            <span>Mammographie</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'IRM'"
                                   [(ngModel)]="selectedBilanRadioType"
                                   (change)="onBilanRadioChange()">
                            <span>IRM</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" 
                                   name="bilan" 
                                   [value]="'Echographie'"
                                   [(ngModel)]="selectedBilanRadioType"
                                   (change)="onBilanRadioChange()">
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
                        placeholder="Rédigez votre résumé sur la consultation ici..."
                        [(ngModel)]="resume">
                    </textarea>
                </div>

                <div class="actions">
                    <button class="button" (click)="enregistrerConsultation()">Enregistrer</button>
                </div>
            </div>
        </div>
    </main>
  `,
  styleUrls: ['./create-cons.component.css']
})
export class CreateConsComponent {
    patient: Patient | undefined;
    consultations : Consultation[] | undefined;
    currentDate: string;
    medicaments: Medicament[] = [];
    nouveauMedicament: Medicament = {
        nom: '',
        dose: 0,
        duree: 0
    };
    selectedRow: number | null = null;
    selectedBilanBioType: string | null = null;
    selectedBilanRadioType: string | null = null;
    bilanBio: BilanBio | null = null;
    bilanRadio: BilanRadio | null = null;
    resume: string = ''; // Add this property
    Soins: Soins[] | null = null;
    dpilist:DPIListComponent | undefined
    id:number | undefined

    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.patient = navigation.extras.state['patient'];
            this.consultations = navigation.extras.state['consultations'];
            this.id=navigation.extras.state['id'];

        }
        this.currentDate = this.formatDate(new Date());
    }

    private formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    ajouterMedicament() {
        if (this.nouveauMedicament.nom && 
            this.nouveauMedicament.dose > 0 && 
            this.nouveauMedicament.duree > 0) {
        this.medicaments.push({...this.nouveauMedicament});
        this.nouveauMedicament = {
            nom: '',
            dose: 0,
            duree: 0,
        };
        this.selectedRow = null;
    }
}

    supprimerMedicament() {
        if (this.selectedRow !== null) {
            this.medicaments.splice(this.selectedRow, 1);
            this.selectedRow = null;
        }
    }

    selectRow(index: number) {
        this.selectedRow = this.selectedRow === index ? null : index;
    }

    ngOnInit() {
        if (!this.patient) {
            this.router.navigate(['/dpi-list']);
        }
        console.log(this.patient);
    }

    onBilanBioChange() {
        if (this.selectedBilanBioType) {
            this.bilanBio = {
                type: this.selectedBilanBioType,
                img: '',
                tests:[],

            };
            this.bilanRadio=null;
            console.log('Bilan Biologique créé:', this.bilanBio);
        }
    }

    onBilanRadioChange() {
        if (this.selectedBilanRadioType) {
            this.bilanRadio = {
                type: this.selectedBilanRadioType,
                compteRendu:'',
                img:'',
            };
            this.bilanBio=null;
            console.log('Bilan Radiologique créé:', this.bilanRadio);
        }
    }

    enregistrerConsultation() {
        // Create the ordonnance object
        const ordonnance: Ordonnance = {
            medicaments: [...this.medicaments],
            valide : false,
        };

        // Create the consultation object
        const consultation: Consultation = {
            date: this.currentDate,
            ordonnance: ordonnance,
            bilanBio: this.bilanBio,
            bilanRadio: this.bilanRadio,
            resume: this.resume,
            soins: this.Soins
        };

        
        this.consultations?.push(consultation)
        this.router.navigate(['doctor-dash'], {
            state: { 
                consultations: this.consultations,
                id:this.id
              }
          });
        
        // Here you would typically send this to your backend service
        // For now, we'll just log it to the console
    }
}
