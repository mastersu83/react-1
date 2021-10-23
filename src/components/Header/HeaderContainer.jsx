import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/auth_reducer";
import { setUsersProfile } from "../../Redux/profile_reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        // debugger;
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
        // debugger;
        // this.props.toggleIsFetching(false);
        // this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, setUsersProfile })(
  HeaderContainer
);
