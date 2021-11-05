import { connect } from 'react-redux';
import {
	followThunk,
	unfollowThunk,
	getUsersThunk,
} from '../../../Redux/users_reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (currentPage) => {
		this.props.getUsersThunk(currentPage, this.props.pageSize);
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}

				<Users
					//{...props}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					followThunk={this.props.followThunk}
					unfollowThunk={this.props.unfollowThunk}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

export default connect(mapStateToProps, {
	followThunk,
	unfollowThunk,
	getUsersThunk,
})(UsersContainer);
