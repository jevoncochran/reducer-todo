import { ADD_ITEM, TOGGLE_COMPLETED, REMOVE_COMPLETED } from "../actions/actions";

export const initialState = [
    { item: 'Learn about context API', completed: false, id: 1}, 
    { item: 'Learn about reducers', completed: false, id: 2},
    { item: 'complete context API project', completed: false, id: 3},
    { item: 'complete reducers project', completed: false, id: 4}
];

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case TOGGLE_COMPLETED:
            const toggledState = [...state];
            toggledState.map(item => {
                if(item.id === action.payload) {
                    item.completed = !item.completed;
                }
            })
            state = toggledState;
            return state;
        case REMOVE_COMPLETED:
            return state.filter(item => !item.completed);
        default:
            return state;
    }
}

