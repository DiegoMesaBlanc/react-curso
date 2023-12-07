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

            {part.kind !== 'group' ?
              <p>
                <em>{part.description}</em>
              </p>
              : null}

            {part.kind === 'background' ?
              <p>
                <em>{part.backgroundMaterial}</em>
              </p>
              : null}
          </div>
        ))
      }
    </>
  )
}

export default Content