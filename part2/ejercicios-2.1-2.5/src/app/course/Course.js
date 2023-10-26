import Part from "./content/part/Part"
import Header from "./header/Header"
import Total from "./total/Total"


const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      {course.parts.map(part => (
        <Part key={part.id} parts={part} />
      ))}
      <Total parts={course.parts} />
    </div>
  )
}

export default Course