import React from "react";

const ProfileStatusWithHooks = (props) => {
  console.log(props.status);
  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };
  const deActiveEditMode = () => {
    setEditMode(false);
    props.updateStatusThunk(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activeEditMode}>
            {props.status || "No Status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deActiveEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
