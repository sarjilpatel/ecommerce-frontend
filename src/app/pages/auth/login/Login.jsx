import React from "react";
import "./Login.css";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { login } from "../core/requests";
import useAuth from "../../../hooks/useAuth";
import useLoading from "../../../hooks/useLoading";

const validationSchema = Yup.object().shape({
  vEmail: Yup.string()
    .email()
    .required("Email is required")
    .matches(/^(?!.*@[^,]*,)/),
  vPassword: Yup.string().required("Password is required"),
});

const Login = () => {
  const idPrefix = "Loginpage";

  const { setAuth } = useAuth();
  const { setIsLoading } = useLoading();

  console.log(useAuth());

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      vEmail: "",
      vPassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setIsLoading(true);
      login(values)
        .then((res) => {
          setAuth({ user: res.data.user, role: res.data.user.eRole });
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
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
