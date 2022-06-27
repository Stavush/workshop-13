import actionTypes from "../actions/constants";

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO handle case actionTypes.RESET (should return the initialState)
    case actionTypes.INCREMENT:
      return { value: state.value + 1 };
    case actionTypes.DECREMENT:
      return { value: state.value - 1 };
    case actionTypes.RESET:
      return { ...initialState };
    // TODO handle case actionTypes.DECREMENT:

    default:
      return state;
  }
};
export default counterReducer;
