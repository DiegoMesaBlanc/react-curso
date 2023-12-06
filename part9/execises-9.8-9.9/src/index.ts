import express from 'express';
import routeDiagnoses from './routes/diagnosesRoute';
import routePatient from './routes/patientRoutes';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', routeDiagnoses);
app.use('/api/patients', routePatient);

app.listen(PORT, () => {
  console.log(`Server initialized on http://localhost:${PORT}`);
});