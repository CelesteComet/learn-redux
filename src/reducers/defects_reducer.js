const initialState = {
  list: [
  {
    name: "Bruce",
    summary: "My summary",
    description: "My description"
  },
  {
    name: "Alex",
    summary: "My second summary",
    description: "My second description"
  },
  {
    name: "Ron",
    summary: "My third summary",
    description: "My third description"
  },
  {
    name: "Alice",
    summary: "My Forth summary",
    description: "My forth description"
  },
  {
    name: "Brian",
    summary: "My fifth summary",
    description: "My fifth description"
  }
  ],
  temp: {
    name: "",
    summary: "",
    description: ""
  },
  index: 0
}

export const DefectsReducer = (state = initialState, action) => {
  let copy;
  switch(action.type) {
    case 'RECEIVE_DEFECT':
      copy = Object.assign({}, state);
      copy.list.push(action.defect);
      return copy;
    case 'INCREMENT_INDEX':
      copy = Object.assign({}, state);
      if(copy.index < copy.list.length - 1) {
        copy.index++;
      }
      return copy;
    case 'DECREMENT_INDEX':
      copy = Object.assign({}, state);
      if(copy.index >= 1){
        copy.index--;
      }
      return copy;
    case 'JUMP_INDEX':
      copy = Object.assign({}, state);
      if(action.index <= copy.list.length && action.index > 0) {
        copy.index = action.index - 1;
      }
      return copy;
    default: 
      return state;
  }
}

export default DefectsReducer;