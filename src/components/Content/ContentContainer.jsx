import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Content from "./Content";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from "./common/Preloader/Preloader";

class ContentContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Content />
      </>
    );
  }
}

export default compose(connect(), withAuthRedirect)(ContentContainer);
