import ToDoItem from "./ToDoItem"
import { useList } from "./redux/todo-list"

export default function List({ list, dispatchList }) {
    let listToUse
    if (list) {
        listToUse = list
    } else {
        const { listData } = useList()
        listToUse = listData
    }

    return (
        <ul>
            {listToUse.map(item => {
                return (
                    <li key={item.id}>
                        <span className={item.done ? "done" : ''}>{item.title}</span>
                        <ToDoItem item={item} dispatchList={dispatchList} />
                    </li>
                )
            })}
        </ul>
    )
}