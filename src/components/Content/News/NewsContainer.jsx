import { connect } from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
