import axios from 'axios'

export const DATA_LOAD_START = 'DATA_LOAD_START';
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
export const DATA_LOAD_FAILURE = 'DATA_LOAD_FAILURE';

export const getData = () => dispatch => {
    // console.log('hello')
    dispatch({ type: DATA_LOAD_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type:  DATA_LOAD_SUCCESS,
                payload: res.data })
        })
        .catch(err => {
            // console.log(err)
            dispatch({ 
                type:  DATA_LOAD_FAILURE,
                payload: err })
})
}