import { BilanBio } from "./bilan-bio";
import { BilanRadio } from "./bilan-radio";
import { Ordonnance } from "./ordonnance";

export interface Consultation {
    date: string;
    ordonnance: Ordonnance;
    bilanBio: BilanBio | null;
    bilanRadio: BilanRadio | null;
    resume: string;
    
}
