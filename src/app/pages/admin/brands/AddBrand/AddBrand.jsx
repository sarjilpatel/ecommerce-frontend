import React from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./AddBrand.css";
import CustomTextArea from "../../../../components/CustomTexxtArea/CustomTextArea";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Brand Name is required"),
});

const AddBrand = () => {
  const idPrefix = "AddBrand";

  const formik = useFormik({
    initialValues: {
      vName: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {},
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
          onChange={formik.handleChange}
          id={`${idPrefix}vName`}
        />
        <CustomTextArea
          autocomplete={"off"}
          type="textarea"
          placeholder="Brand Description"
          name="tBranddescription"
          onChange={formik.handleChange}
          id={`${idPrefix}tBranddescription`}
        />
        <button type="submit" className="submitbuttoncustom ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
