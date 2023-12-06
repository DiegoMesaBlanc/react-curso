import express from 'express';
import diagnoseService from '../services/diagnoseService';

const routeDiagnoses = express.Router();

routeDiagnoses.get('/', (_req, res) => {
  res.send(diagnoseService.getDiagnoses());
});

export default routeDiagnoses;