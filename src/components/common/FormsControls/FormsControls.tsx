import classes from "./FormsControls.module.css";
import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};

const FormControl: React.FC<FormControlPropsType> = ({ meta, children }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      <div>
        {hasError && <span className={classes.open}> {meta.error} </span>}
      </div>
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...props.input} {...restProps} />
    </FormControl>
  );
};
