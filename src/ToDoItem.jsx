import { setDone, removeItem } from "./redux/todo-list"

export default function ToDoItem({ item }) {
    return (
        <>
            <button onClick={() => setDone({ itemID: item.id, doneState: item.done })}>
                {item.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => removeItem(item.id)}>
                Delete
            </button>
        </>
    )
}