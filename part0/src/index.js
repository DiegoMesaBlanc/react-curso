import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ information }) => {
  return (
    <div>
      <Part info={information} />
      <Part info={information} />
      <Part info={information} />
    </div>
  )
}

const Part = ({ info }) => {
  return (
    <div>
      <p>
        {info.part1} {info.excexercises1ercise}
      </p>
      <p>
        {info.part2} {info.exercises2}
      </p>
      <p>
        {info.part3} {info.exercises3}
      </p>
    </div>
  )
}

const Total = ({ exc }) => {
  return (
    <div>
      <p>Number of exercises {exc.exercises1 + exc.exercises2 + exc.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content information={{ part1, exercises1, part2, exercises2, part3, exercises3 }} />
      <Total exc={{ exercises1, exercises2, exercises3 }} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))