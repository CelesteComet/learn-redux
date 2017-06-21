import { connect } from 'react-redux';
import Body from './body';
import { receiveDefect } from '../actions/defects_actions';

 //   if (this.props.defects.list.length > 0) {
  //    var defect = this.props.defects.list[this.props.defects.index];
   // } else {
    //  defect = "";
   // }


const mapStateToProps = (state) => {
  if(state.defects.list > 0) {
    return {'defect': state.defects.list[state.index]}
  } else {
    return {'defect': undefined}
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (defect) => dispatch(receiveDefect(defect)),
});


const BodyContainer = connect(mapStateToProps)(Body);


export default BodyContainer;