export const receiveDefect = (defect) => {
  return {
    type: "RECEIVE_DEFECT",
    defect: defect 
  }
}

export const incrementIndex = () => {
  return {
    type: "INCREMENT_INDEX"
  }
}

export const decrementIndex = () => {
  return {
    type: "DECREMENT_INDEX"
  }
}

export const jumpToIndex = (index) => {
  return {
    type: "JUMP_INDEX",
    index: index 
  }
}