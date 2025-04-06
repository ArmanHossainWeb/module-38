
import './App.css'
import Actors from './component/actors/Actors'
import Player from './component/player/player'
import Singers from './component/singer/Singers'
import Todo from './component/toDo/Todo'
import User from './component/user/User'

function App() {
  const actors = ["hena","bappa raj","salman khan","hero alom ","omor sanny","joshim","anwar"];

  const singers = [
    {id: 1, name:"Dr.mahfuz", age:68},
    {id: 2, name:"Tahsan", age:45},
    {id: 3, name:"arman", age:15},
    {id: 4, name:"tanvir", age:20},
    {id: 5, name:"samiya", age:17},
    {id: 6, name:"rakib", age:25},
    {id: 7, name:"probir", age:30},
    {id: 8, name:"rahat", age:50}
  ]

  return (
    <>
      
      <h1>React Core Consepts</h1>

    {
      singers.map(singer => <Singers key={singer.id} singer= {singer}></Singers>)
    }


      {/* <Person name="arman" age="19" depertment="computer"></Person>
      <Person name="rakib" age="12" depertment="civil"></Person>
      <Person name="samiya" age="25" depertment="electrical"></Person>
      <Person name="tanvir" age="40" depertment="mecanical"></Person> */}
 
      {/* <Player name="Arman" age="20"></Player>
      <Player name="tanvir" age="30"></Player>
      <Player name="rakib" age="50"></Player> */}


      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn next js" isDone={false}></Todo>
      <Todo task="learn css" isDone={true}></Todo> */}

        {/* <User></User> */}


        {/* {
          actors.map(actors => <Actors key={actors.id} actors={actors}></Actors> )
        } */}

    </>
  )
}

function Person(props) {
  return(
    <>
    <p>i am a person  {props.name}   {props.age}   {props.depertment}</p>
    <small>you are a person </small>
    </>
  )
}



export default App
