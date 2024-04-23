import "./AddCategory.css";
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import { useFormik } from "formik";

import * as Yup from "yup";
import toast from "react-hot-toast";
import { addCategory } from "./core/requests";
import { useContext } from "react";
import AddCategoryContext from "./core/AddCategoryProvider";
import Select from "react-select";
import CustomSelectSearch from "../../../../../components/CustomSelectSearch/CustomSelectSearch";
import { useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Category Name is required"),
  uGroupId: Yup.string().required("Group is required"),
  uSizeCategoryId: Yup.string().required("Sizecategory is required"),
});

const AddCategory = ({ isEditMode }) => {
  const idPrefix = "AddCategory";
  const { allGroups, allSizeCategories } = useContext(AddCategoryContext);
  const location = useLocation();

  const formik = useFormik({
    initialValues: isEditMode
      ? location.state
      : {
          vName: "",
          uGroupId: "",
          uSizeCategoryId: "",
        },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addCategory(values)
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
          <h2>{isEditMode ? "Edit" : "Add"} Category</h2>
          <div className="d-flex flex-column gap-3">
            <CustomInput
              autoComplete={"off"}
              type="text"
              placeholder="Category Name"
              name="vName"
              value={formik.values.vName}
              onChange={formik.handleChange}
              id={`${idPrefix}vName`}
              error={formik.errors.vName && formik.touched.vName ? "true" : ""}
              errortext={formik.errors.vName}
            />

            <CustomSelectSearch
              lable="Group"
              handleOnChange={formik.handleChange}
              optionLableAccessor={"vName"}
              optionValueAccessor={"id"}
              options={allGroups}
              name={"uGroupId"}
              value={formik.values.uGroupId}
              error={
                formik.errors.uGroupId && formik.touched.uGroupId ? "true" : ""
              }
              errortext={formik.errors.uGroupId}
            />

            <CustomSelectSearch
              lable="Size Category"
              handleOnChange={formik.handleChange}
              optionLableAccessor={"vName"}
              optionValueAccessor={"id"}
              options={allSizeCategories}
              name={"uSizeCategoryId"}
              value={formik.values.uSizeCategoryId}
              error={
                formik.errors.uSizeCategoryId && formik.touched.uSizeCategoryId
                  ? "true"
                  : ""
              }
              errortext={formik.errors.uSizeCategoryId}
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

export default AddCategory;
