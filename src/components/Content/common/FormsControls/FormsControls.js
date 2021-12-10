import classes from "./FormsControls.module.css";

const FormControl = ({ meta, children }) => {
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

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...props.input} {...restProps} />
    </FormControl>
  );
};
