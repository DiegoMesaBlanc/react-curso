import { v1 as uuid } from 'uuid';
import patients from '../data/patients';
import { NewPatientEntry, NonDataPatient } from '../interfaces/types';
import { PatientDTO } from './../interfaces/PatientDTO';


const getPatients = (): PatientDTO[] => {
  return patients;
};

const getNonShowPatient = (): NonDataPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};


const addPatient = (patient: NewPatientEntry): PatientDTO => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    id: uuid(),
    ...patient
  };

  patients.push(newPatient);

  return newPatient;
};

export default {
  getPatients,
  getNonShowPatient,
  addPatient
};