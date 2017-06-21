import { connect } from 'react-redux';
import Header from './header';
import { incrementIndex, decrementIndex, jumpToIndex } from '../actions/defects_actions'

const mapStateToProps = (state) => {
    return {
      'defects': state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementIndex: () => {
      dispatch(incrementIndex());
    },
    handleDecrementIndex: () => {
      dispatch(decrementIndex());
    },
    handleJumpIndex: (jumpIndex) => {
      console.log("JUMP INDEX WORKING IN HEADER CONTAINER")
      jumpIndex = parseInt(jumpIndex);
      dispatch(jumpToIndex(jumpIndex));
    }
  }
}



const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default HeaderContainer;