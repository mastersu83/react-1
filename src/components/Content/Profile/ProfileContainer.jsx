import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfileThunk } from "../../../Redux/profile_reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20369;
    }
    this.props.setUsersProfileThunk(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, {
    setUsersProfileThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
