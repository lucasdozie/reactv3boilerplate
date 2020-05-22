export const FETCH_DATA = 'FETCH_DATA';

// default function to display redux action format
export const fetchData = () => dispatch => {
    let testVar = 'Hello';

    // action object format being return to a reducer
    dispatch({
        type: FETCH_DATA,
        payload: testVar
    })
}