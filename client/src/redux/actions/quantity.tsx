import * as actions from './types'

export const increaseQuantity = () => {
  return {
    type: actions.INCREASE_QUANTITY,
  }
}

export const decreaseQuantity = () => {
  return {
    type: actions.DECREASE_QUANTITY,
  }
}
