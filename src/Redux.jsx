import { setList } from './redux/todo-list'
import List from './List'

let inputText = ''
let count = 0

export default function Redux() {
    function handleChange(event) {
        inputText = event.target.value
      }
      return (
        <div>
          <h1>To Do List: Redux</h1>
          <input type="text" onChange={handleChange} />
          <button onClick={() => setList({ title: inputText, done: false, id: count++ })}>Add</button>
          <List />
        </div>
      )
}