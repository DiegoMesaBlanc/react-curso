


const calculateBmi = (estatura: number, peso: number): number => {
  return (peso) / (estatura * estatura)
}


console.log(calculateBmi(180, 74))