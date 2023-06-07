import { SET_CURRENT_USER } from "../../actions/user/currentUser";
import { User } from "../../type";

interface currentUserActionType {
    type: typeof SET_CURRENT_USER,
    payload: User | null
}

const initialState = {
    currentUser: null
}

const currentUserReducer = (state = initialState, action:currentUserActionType) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                currentUser: action.payload
            }
            default: 
                return state
    }
}

export default currentUserReducer