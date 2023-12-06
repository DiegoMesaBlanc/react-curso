import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../core/utilities';

const routePatient = express.Router();

routePatient.get('/', (_req, res) => {
  res.send(patientService.getNonShowPatient());
});

routePatient.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);

    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }

    res.status(400).send(errorMessage);
  }
});

export default routePatient;