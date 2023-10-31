import { setDone, removeItem } from "./redux/todo-list"

export default function ToDoItem({ item, dispatchList }) {

    return (
        <>
            {dispatchList ? (
                <>
                    <button onClick={() => dispatchList({ type:'SET_DONE', payload: {itemID: item.id, doneState: item.done} })}>
                        {item.done ? 'Undo' : 'Done'}
                    </button>
                    <button onClick={() => dispatchList({type:'REMOVE_ITEM', payload: item.id})}>
                        Delete
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => setDone({ itemID: item.id, doneState: item.done })}>
                        {item.done ? 'Undo' : 'Done'}
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                        Delete
                    </button>
                </>
            )}
        </>
    )
}