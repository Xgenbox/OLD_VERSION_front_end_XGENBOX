

import {  SET_ALL_MEDICINE } from "../types"

const initialState = {
    medicines: []


}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ALL_MEDICINE:
            return {
                ...state,
                medicines: action.payload

            }

        default:
            return state
    }

}


