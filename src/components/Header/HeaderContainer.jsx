import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/auth_reducer";
import { setUsersProfile } from "../../Redux/profile_reducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth().then((data) => {
      // debugger;
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
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
