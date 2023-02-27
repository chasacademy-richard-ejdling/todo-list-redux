// import { useState } from 'react'
import './App.css'
import { setList } from './redux/todo-list'
import List from './List'

let inputText = ''
let count = 0

function App() {
  /* const [list, setList] = useState([]) */

  function handleChange(event) {
    inputText = event.target.value
  }

  /* function handleAdd() {
    setList({ title: inputText, done: false, id: count++ })

    // const item = { title: inputText, done: false, id: count++ }
    // const newList = [...list]

    // newList.push(item)

    // setList(newList)
  } */

  /* function changeDone(id, done) {
    // const newList = [...list]
    // newList.forEach(item => {
    //   if (item.id == id) {
    //     item.done = !done
    //   }
    // })

    setDone({
      itemID: id,
      doneState: done
    })
  } */

  /* function deleteItem(id) {
    // const newList = [...list]
    // const index = newList.indexOf(newList.filter(item => item.id == id)[0])
    // newList.splice(index, 1)

    removeItem(id)
  } */

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setList({ title: inputText, done: false, id: count++ })}>Add</button>
      <List />
    </div>
  )
}

export default App
