import { createSlice } from "@reduxjs/toolkit"


const notifySlice = createSlice({
  name: 'notify',
  initialState: '',
  reducers: {
    setNotify(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      console.log(state);
      console.log(action);
      return null
    }
  }
})


export const { setNotify, clearNotification } = notifySlice.actions

export const appendNotify = (message, time) => {
  return dispatch => {
    dispatch(setNotify(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export default notifySlice.reducer