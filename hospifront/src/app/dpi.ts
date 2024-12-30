import { Patient } from "./patient";
import { Consultation } from "./consultation";


export interface DPI {
    patient : Patient,
    consultations:  Consultation[],
}
