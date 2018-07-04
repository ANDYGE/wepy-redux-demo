import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions'

const sleep = s => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, s * 1000)
  })
}

export const asyncInc = createAction(ASYNC_INCREMENT, async () => {
  const v = await sleep(1)
  return v
})

export const asyncDes = createAction('ASYNC_DECREMENT', () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
