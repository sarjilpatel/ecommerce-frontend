import React from "react";
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addSizeCategory } from "./core/requests";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Group Name is required"),
});
const AddSizeCategory = () => {
  const idPrefix = "AddSizecategory";
  const formik = useFormik({
    initialValues: {
      vName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addSizeCategory(values)
        .then((res) => {
          toast.success(res.data.message);
          resetForm();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message || "Something went wrong");
        });
    },
  });

  return (
    <div className="regularpadding">
      <form action="" className="cardcustom" onSubmit={formik.handleSubmit}>
        <div className="p-5 table-responsive d-flex flex-column gap-5">
          <h2>Add SizeCategory</h2>
          <div className="d-flex flex-column gap-3">
            <CustomInput
              autoComplete={"off"}
              type="text"
              placeholder="Sizecategory Name"
              name="vName"
              value={formik.values.vName}
              onChange={formik.handleChange}
              id={`${idPrefix}vName`}
              error={formik.errors.vName && formik.touched.vName}
              errortext={formik.errors.vName}
            />
            <button type="submit" className="submitbuttoncustom ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSizeCategory;
