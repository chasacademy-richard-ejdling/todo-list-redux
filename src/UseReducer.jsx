import * as React from 'react'
import List from './List'

let inputText = ''
let count = 0

function listReducer(state, action) {
    let newList = []
    switch (action.type) {
        case 'SET_LIST':
            newList = [...state]
            newList.push(action.payload)
            return newList;
        case 'SET_DONE':
            newList = [...state]
            newList.forEach(item => {
                if (item.id == action.payload.itemID) {
                    item.done = !action.payload.doneState
                }
            })
            return newList;
        case 'REMOVE_ITEM':
            newList = [...state]
            const index = newList.indexOf(newList.filter(item => item.id == action.payload)[0])
            newList.splice(index, 1)
            return newList
    }
}

export default function UseReducer() {
    const [list, dispatchList] = React.useReducer(listReducer, [])

    function handleChange(event) {
        inputText = event.target.value
    }

    return (
        <div>
            <h1>To Do List: useReducer</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={() => dispatchList({ type: 'SET_LIST', payload: { title: inputText, done: false, id: count++ } })}>Add</button>
            <List list={list} dispatchList={dispatchList} />
        </div>
    )
}