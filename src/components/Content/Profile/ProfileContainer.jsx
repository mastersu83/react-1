import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setStatusThunk,
  setUsersProfileThunk,
  updateStatusText,
  updateStatusThunk,
} from "../../../Redux/profile_reducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { setAuthUserDataThunk } from "../../../Redux/auth_reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.setUsersProfileThunk(userId);
    this.props.setAuthUserDataThunk(userId);
    this.props.setStatusThunk(userId);
  }

  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
          updateStatusText={this.props.updateStatusText}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUsersProfileThunk,
    setAuthUserDataThunk,
    setStatusThunk,
    updateStatusThunk,
    updateStatusText,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
