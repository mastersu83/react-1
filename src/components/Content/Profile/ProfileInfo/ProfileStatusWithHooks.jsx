import React from "react";
// import { useDispatch } from "react-redux";
// import { updateStatusThunk } from "../../../../Redux/profile_reducer";

const ProfileStatusWithHooks = (props) => {
  // const dispatch = useDispatch();

  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };
  const deActiveEditMode = () => {
    setEditMode(false);
    props.updateStatusThunk(status);
    // dispatch(updateStatusThunk(status));
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
