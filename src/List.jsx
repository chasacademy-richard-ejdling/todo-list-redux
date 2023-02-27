import ToDoItem from "./ToDoItem"
import { useList } from "./redux/todo-list"

export default function List() {
    const {listData} = useList()

    return (
        <ul>
            {listData.map(item => {
                return (
                    <li key={item.id}>
                        <span className={item.done ? "done" : ''}>{item.title}</span>
                        <ToDoItem item={item} />
                    </li>
                )
            })}
        </ul>
    )
}