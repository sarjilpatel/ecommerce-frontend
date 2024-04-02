import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import CustomInput from "../../../components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoading,
} from "../../../redux/features/loadingSlice";
import { signup } from "../core/requests";
import { loginUser } from "../../../redux/features/userSlice";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Name is required"),
  vEmail: Yup.string()
    .email()
    .required("Email is required")
    .matches(/^(?!.*@[^,]*,)/),
  vPassword: Yup.string().required("Password is required"),
  vImage: Yup.string().required("Profile Image is required"),
});

const SignUp = () => {
  const idPrefix = "SignUpPage";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      vName: "",
      vEmail: "",
      vPassword: "",
      vImage: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // e.preventDefault();
      dispatch(startLoading());

      signup(values)
        .then((res) => {
          dispatch(loginUser(res.data.user));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispatch(stopLoading());
        });
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      formik.setFieldValue("vImage", file);
    }
  };

  return (
    <div className="signuppage">
      <form
        onSubmit={formik.handleSubmit}
        className="cardcustom signupinputs  "
      >
        <h2>SignUp</h2>
        <CustomInput
          type="text"
          placeholder="Name"
          name="vName"
          id={`${idPrefix}vName`}
          onChange={formik.handleChange}
          error={formik.errors.vName && formik.touched.vName}
          errortext={formik.errors.vName}
        />
        <CustomInput
          type="text"
          placeholder="Email"
          name="vEmail"
          id={`${idPrefix}vEmail`}
          onChange={formik.handleChange}
          error={formik.errors.vEmail && formik.touched.vEmail}
          errortext={formik.errors.vEmail}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          name="vPassword"
          id={`${idPrefix}vPassword`}
          onChange={formik.handleChange}
          error={formik.errors.vPassword && formik.touched.vPassword}
          errortext={formik.errors.vPassword}
        />
        <CustomInput
          type="file"
          placeholder="Profile Image"
          name="vImage"
          id={`${idPrefix}vImage`}
          onChange={handleFileChange}
          error={formik.errors.vImage && formik.touched.vImage}
          errortext={formik.errors.vImage}
        />
        <button
          type="submit"
          // onClick={formik.handleSubmit}
          className="submitbuttoncustom "
        >
          Submit
        </button>
        <div>
          <Link to={"/login"} className="linkcustom">
            Already Have an Account ? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
