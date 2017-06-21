import { connect } from 'react-redux';
import Body from './body';
import { receiveDefect } from '../actions/defects_actions';



const mapStateToProps = (state) => {
    return {
      'defects': state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (defect) => {
      dispatch(receiveDefect(defect));
    }
  }
}



const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body);


export default BodyContainer;