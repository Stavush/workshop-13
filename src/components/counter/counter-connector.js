import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCounterValue } from "../../app/selectors/counter-selectors";
import { getIsLoggedIn } from "../../app/selectors/auth-selectors";
import { incrementAction, decrementAction, resetAction } from "../../app/actions/counter-actions";
import CounterComponent from "./counter-component";

const mapStateToProps = (state, ownProps) => {
  const counterValue = getCounterValue(state);
  const isLoggedIn = getIsLoggedIn(state);
  return { counterValue, isLoggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO bind decrementAction and resetAction action creators
  return bindActionCreators({ incrementAction, decrementAction, resetAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
