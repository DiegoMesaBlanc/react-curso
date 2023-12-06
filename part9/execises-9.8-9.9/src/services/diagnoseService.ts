import data from '../data/diagnoses';
import { DiagnosesDTO } from '../interfaces/DiagnosesDTO';



const getDiagnoses = (): DiagnosesDTO[] => {
  return data;
};

const addDiagnos = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnos
};