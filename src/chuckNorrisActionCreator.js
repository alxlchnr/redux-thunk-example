export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE';
export const RECEIVE_JOKE = 'RECEIVE_JOKE';

function getRandomJoke() {
    return {
        type: GET_RANDOM_JOKE,
    }
}

function receiveJoke(json) {
    return {
        type: RECEIVE_JOKE,
        data: json
    }
}

export function fetchJoke() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(getRandomJoke())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('http://api.icndb.com/jokes/random?escape=javascript')
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveJoke(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
