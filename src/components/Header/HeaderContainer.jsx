import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserDataThunk } from "../../Redux/auth_reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserDataThunk();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
    setAuthUserDataThunk,
  })
)(HeaderContainer);
