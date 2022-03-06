import React, { ChangeEvent } from "react";

type PropsTye = {
  status: string;
  updateStatusThunk: (status: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

class ProfileStatus extends React.Component<PropsTye, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusThunk(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    this.setState({ status: text });
  };

  componentDidUpdate(prevProps: PropsTye, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "No Status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
