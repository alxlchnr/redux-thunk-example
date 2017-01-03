export default (state = {}, action) => {
    if (action.type === 'GET_RANDOM_JOKE') {
        console.log("reduce random joke");
        return state;
    } else if (action.type === 'RECEIVE_JOKE') {
        console.log('receive joke');
        return {
            joke: action.data.value.joke
        };
    } else {
        return state;
    }
}
