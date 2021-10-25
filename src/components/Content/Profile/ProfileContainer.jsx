import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "../../../Redux/profile_reducer";
import { withRouter } from "react-router";
import { usersAPI } from "../../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20369;
    }

    usersAPI.getProfile(userId).then((data) => {
      this.props.setUsersProfile(data);
    });
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(
  WithUrlDataContainerComponent
);
