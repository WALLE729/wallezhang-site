const HOME_TEST = 'HOME_TEST'

const homeInitState = {
  data: 'walle'
}

//reducer
export function HomeRedux(state = homeInitState, action) {
  switch (action.type) {
    case HOME_TEST:
      return { ...state, data: 'walle123' }
    default:
      return { ...state }
  }
}

//action creator
export function homeStateTest() {
  return { type: 'HOME_TEST' }
}

export function homeStateAsync() {
  alert(1)
  return dispatch => {
    setTimeout(() => {
      dispatch(homeStateTest())
    }, 2000)
  }
}
