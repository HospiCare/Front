type UserType = 'admin' | 'superuser' | 'patient' | 'medecin' | 'laborantin' | 'radiologue' | 'infirmier';


export interface UserAccount {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  user_type: UserType;

  // Common fields for all user types
  telephone?: string;
  date_naissance?: string;
  adresse?: string;

  // Patient-specific field
  NSS?: string;

  // Laborantin-specific fields
  department?: string;
  date_recrutement?: string;

  // Radiologue and Infirmier-specific fields
  specialization?: string;
}
