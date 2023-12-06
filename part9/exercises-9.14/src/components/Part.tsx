import { CoursePart } from "../interfaces/interfacesDTO";


const Part = ({ parts }: { parts: CoursePart[] }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const text = () => {
    parts.forEach(part => {
      switch (part.kind) {
        case "basic":
          console.log(part);
          break;
        case "background":
          console.log(part);
          break;
        case "group":
          console.log(part);
          break;
        default:
          assertNever(part);
          break;
      }
    });
  }

  return (
    <div>{JSON.stringify(text)}</div>
  )
}

export default Part