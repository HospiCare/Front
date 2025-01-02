import { Medicament } from "./medicament";

export interface Ordonnance {
    medicaments: Array<Medicament>;
    valide:boolean,
}
