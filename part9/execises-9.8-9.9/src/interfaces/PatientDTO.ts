import { Gender } from './types';


export interface PatientDTO {
  id: string
  name: string
  dateOfBirth: string
  ssn?: string
  gender: Gender
  occupation: string
}
