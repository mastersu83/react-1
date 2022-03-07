import React from "react";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginOutThunk, loginThunk } from "../../redux/auth_reducer";
import classes from "../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../redux/redux_store";

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
      )}
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType>({
  form: "login",
})(LoginForm);

type MapStatePropsType = {
  isAuth: boolean;
};
type MapDispatchPropsType = {
  loginThunk: (email: string, password: string, rememberMe: boolean) => void;
};

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { loginThunk, loginOutThunk })(Login);
