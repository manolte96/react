import './App.css';
import React, {useState} from "react"
function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const Gone = () => {
//remove this item from toDo array
  }
  console.log("Your state is",isClicked)
  console.log(toDo)
  console.log(toDos)

  const onChangeHandler = (e) =>{
    setToDo(e.target.value)
  }
  const onClickHandler = () => {
  // Make a copy of the todo state
  setToDos([...toDos, toDo])
  setToDo("")
  }
  return (
    <div className="App">
      Howdy Y'all
      <br></br>
      <button onClick = {onClickHandler}>"Click Me!"
      </button> <br></br>
      <input onChange = {onChangeHandler} value = {toDo}>
      </input>
      <ul>
  {toDos.map(toDo => {
    return (
      <li onClick = {Gone}
       key={toDo.id}>
        {toDo}
      </li>)
  })}
</ul>
    </div>
  );
}

export default App;
