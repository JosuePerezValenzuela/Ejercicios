const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part1} number of excercices {props.exercises1}</p>
      <p>{props.part2} number of excercices {props.exercises2}</p>
      <p>{props.part3} number of excercices {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of excercices {props.totalE} </p>
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
      <Header course = {course}/>
      <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3}/>
      <Total totalE = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App