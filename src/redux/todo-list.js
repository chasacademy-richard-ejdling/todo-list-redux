import { createReduxModule } from "hooks-for-redux";

const initialState = {
    listData: []
}

export const [useList, { setList, setDone, removeItem }] = createReduxModule('todo-list', initialState,
    {
        setList: (state, listItem) => {
            const newList = [...state.listData]
            newList.push(listItem)
            return { ...state, listData: newList }
        },
        setDone: (state, payload) => {
            const newList = [...state.listData]
            newList.forEach(item => {
                if (item.id == payload.itemID) {
                    item.done = !payload.doneState
                }
            })
            return { ...state, listData: newList}
        },
        removeItem: (state, itemID) => {
            const newList = [...state.listData]
            const index = newList.indexOf(newList.filter(item => item.id == itemID)[0])
            newList.splice(index, 1)
            return { ...state, listData: newList}
        }

    })