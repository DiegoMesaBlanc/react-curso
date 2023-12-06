import { PatientDTO } from './PatientDTO';


export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type NonDataPatient = Omit<PatientDTO, 'ssn'>;

export type NewPatientEntry = Omit<PatientDTO, 'id'>;