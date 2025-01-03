import { BilanBio } from "./bilan-bio";
import { BilanRadio } from "./bilan-radio";
import { Frais } from "./frais";
import { Ordonnance } from "./ordonnance";
import { Soins } from "./soins";

export interface Resume {
    id: number;
    contenu: string;
    antecedants: string;
}

export interface Certificat {}

export interface Consultation {
    id: number;
    date: string;
    resume: Resume | null;
    frais : Frais | null;
    certificat: Certificat | null;
    dpi: number; // dpi id

    ordonnance: Ordonnance;
    bilanBio: BilanBio | null;
    bilanRadio: BilanRadio | null;
    soins : Soins | null;
    laboratin : string;
    radiologue : string;
    infirmier : string;
}
