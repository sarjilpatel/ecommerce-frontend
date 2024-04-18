import React from "react";
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import { addGroup } from "./core/requests";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Group Name is required"),
});

const AddGroup = () => {
  const idPrefix = "AddGroup";
  const formik = useFormik({
    initialValues: {
      vName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addGroup(values)
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
          <h2>Add Group</h2>
          <div className="d-flex flex-column gap-3">
            <CustomInput
              autoComplete={"off"}
              type="text"
              placeholder="Group Name"
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

export default AddGroup;
