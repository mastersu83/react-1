import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  setStatusThunk,
  setUsersProfileThunk,
  updateStatusThunk,
} from '../../../redux/profile_reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { setAuthUserDataThunk } from '../../../redux/auth_reducer';
import { withRouter } from 'react-router-dom';
import {
  geIisAuthSelector,
  getAuthorizedUserIdSelector,
  getProfileSelector,
  getStatusSelector,
} from '../../../redux/profile_selectors';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.setUsersProfileThunk(userId);
    this.props.setAuthUserDataThunk(userId);
    this.props.setStatusThunk(userId);
    console.log(this.isAuth);
  }

  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
  authorizedUserId: getAuthorizedUserIdSelector(state),
  isAuth: geIisAuthSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    setUsersProfileThunk,
    setAuthUserDataThunk,
    setStatusThunk,
    updateStatusThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
