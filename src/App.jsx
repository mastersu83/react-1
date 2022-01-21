import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import Content from './components/Content/Content';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAppThunk } from './Redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
import 'antd/dist/antd.css';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeAppThunk();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="app-wrapper">
				<Navbar />
				<Route path="/" render={() => <HeaderContainer />} />
				<Content />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default compose(
	withRouter,
	connect(mapStateToProps, {
		initializeAppThunk,
	})
)(App);
