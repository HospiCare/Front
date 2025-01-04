import { BilanBio } from "./bilan-bio";
import { BilanRadio } from "./bilan-radio";
import { Frais } from "./frais";
import { Ordonnance } from "./ordonnance";
import { Soins } from "./soins";

export interface Consultation {
    date: string;
    ordonnance: Ordonnance;
    bilanBio: BilanBio | null;
    bilanRadio: BilanRadio | null;
    resume: string;
    soins : Soins | null;
    laboratin : string;
    radiologue : string;
    infirmier : string;
    frais : Frais | null;
    
}
