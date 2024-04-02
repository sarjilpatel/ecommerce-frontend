import React from "react";
import "./Login.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/CustomInput";
import { login } from "../core/requests";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoading,
} from "../../../redux/features/loadingSlice";
import { loginUser } from "../../../redux/features/userSlice";

const validationSchema = Yup.object().shape({
  vEmail: Yup.string()
    .email()
    .required("Email is required")
    .matches(/^(?!.*@[^,]*,)/),
  vPassword: Yup.string().required("Password is required"),
});

const Login = () => {
  const idPrefix = "Loginpage";
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      vEmail: "",
      vPassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      dispatch(startLoading());
      login(values)
        .then((res) => {
          dispatch(loginUser(res.data.user));
          if (searchparams.get("refer")) {
            navigate(searchparams.get("refer"));
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispatch(stopLoading());
        });
    },
  });

  return (
    <div className="loginpage">
      <form onSubmit={formik.handleSubmit} className="cardcustom logininputs">
        <h2>Login</h2>
        <CustomInput
          type="text"
          placeholder="Email"
          name="vEmail"
          onChange={formik.handleChange}
          id={`${idPrefix}vEmail`}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          name="vPassword"
          onChange={formik.handleChange}
          id={`${idPrefix}vPassword`}
        />
        <button type="submit" className="submitbuttoncustom ">
          Submit
        </button>
        <div>
          <Link to={"/signup"} className="linkcustom">
            New User SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
