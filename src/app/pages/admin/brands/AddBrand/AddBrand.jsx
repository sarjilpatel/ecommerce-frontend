import React from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./AddBrand.css";
import CustomTextArea from "../../../../components/CustomTexxtArea/CustomTextArea";
import { addBrand } from "./core/requests";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Brand Name is required"),
  tBranddescription: Yup.string().required("Brand Description is required"),
});

const AddBrand = () => {
  const idPrefix = "AddBrand";
  const formik = useFormik({
    initialValues: {
      vName: "",
      tBranddescription: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addBrand(values)
        .then((res) => {
          toast.success(res.data.message);
          resetForm();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message || "Something went wrong");
        });
    },
  });

  return (
    <div className="addbrandpage">
      <form
        action=""
        className="cardcustom addbrandform"
        onSubmit={formik.handleSubmit}
      >
        <h2>Add Brand</h2>
        <CustomInput
          autocomplete={"off"}
          type="text"
          placeholder="Brand Name"
          name="vName"
          value={formik.values.vName}
          onChange={formik.handleChange}
          id={`${idPrefix}vName`}
          error={formik.errors.vName && formik.touched.vName}
          errortext={formik.errors.vName}
        />
        <CustomTextArea
          autocomplete={"off"}
          type="textarea"
          placeholder="Brand Description"
          name="tBranddescription"
          value={formik.values.tBranddescription}
          onChange={formik.handleChange}
          id={`${idPrefix}tBranddescription`}
          error={
            formik.errors.tBranddescription && formik.touched.tBranddescription
          }
          errortext={formik.errors.tBranddescription}
        />
        <button type="submit" className="submitbuttoncustom ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
