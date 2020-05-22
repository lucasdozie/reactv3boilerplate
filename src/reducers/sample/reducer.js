import {
    FETCH_DATA
} from './action';

const initialState = {
    testData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                testData: action.payload
            }
        default:
            return state;
    }
};