import { CoursePart } from "../interfaces/interfacesDTO";


const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <>
      {
        parts.map(part => (
          <div key={part.name}>
            <p>
              <strong>{part.name} {part.exerciseCount}</strong>
            </p>

            <p>
              <em>{part.description}</em>
            </p>

            <p>
              <em>{part.backgroundMaterial}</em>
            </p>
          </div>
        ))
      }
    </>
  )
}

export default Content