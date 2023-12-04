import { SET_DETAILS_MEDICINE } from "../types"

const initialState = {
    MedicineDetails: {}


}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_DETAILS_MEDICINE:
            return {
                ...state,
                MedicineDetails: action.payload

            }

        default:
            return state
    }

}


