import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "../Dialogs.module.css";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import React from "react";

const maxLength50 = maxLengthCreator(50);

const AddMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter massage"}
          name={"newMassageBody"}
          component={Textarea}
          className={classes.textarea}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dialogAddMassageForm",
})(AddMassageForm);
