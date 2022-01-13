import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../../common/FormsControls/FormsControls";
import classes from "../MyPosts.module.css";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import React from "react";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"enter massage"}
          name={"newPostBody"}
          component={Textarea}
          className={classes.textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);
