

import {   SET_ALL_APPOINTMENT } from "../types"

const initialState = {
    AppointmentList: {},


}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ALL_APPOINTMENT:
            return {
                ...state,

                AppointmentList: action.payload,


            }

        default:
            return state
    }

}


