import { Medicament } from "./medicament";

export interface Ordonnance {
    medicaments: Medicament[];
    valide:boolean,
}
