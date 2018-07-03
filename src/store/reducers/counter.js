import { handleActions } from 'redux-actions'
import { DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  INCREMENT (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) { // es6允许用变量名作为属性值，即放在方括号内
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
