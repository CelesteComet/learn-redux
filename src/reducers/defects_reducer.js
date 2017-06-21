const initialState = {
  list: [],
  //index: 0
}

export const DefectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_DEFECT':
      let copy = Object.assign({}, state); 
      copy.list.push(action.defect);
      if(copy.index === undefined) {
        copy.index = 0;
      } else {
        copy.index++;
      }
      return copy;
    default: 
      return state;
  }
}

export default DefectsReducer;