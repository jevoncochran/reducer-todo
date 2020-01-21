export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export const addItem = input => {
    return {
        type: ADD_ITEM, payload: input
    }
};

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED, payload: id
    }
};

export const removeCompleted = () => {
    return {
        type: REMOVE_COMPLETED
    }
};