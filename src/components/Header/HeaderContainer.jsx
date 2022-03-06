import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { loginOutThunk } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        loginOut={this.props.loginOutThunk}
        isAuth={this.props.isAuth}
        login={this.props.login}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  loginOutThunk,
})(HeaderContainer);
