export default (state = {}, action) => {
    if (action.type === 'GET_RANDOM_JOKE') {
        // do nothing for now, we may display an activity spinner later
        return state;
    } else if (action.type === 'RECEIVE_JOKE') {
        // copy joke to the state
        return {
            joke: action.data.value.joke
        };
    } else {
        return state;
    }
}
