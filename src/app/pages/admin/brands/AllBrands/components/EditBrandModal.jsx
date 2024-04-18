import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import CustomTextArea from "../../../../../components/CustomTexxtArea/CustomTextArea";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("Brand Name is required"),
  tBranddescription: Yup.string().required("Brand Description is required"),
});

const EditBrandModal = ({ show, handleClose, brand }) => {
  const idPrefix = "AddBrand";
  const formik = useFormik({
    initialValues: {
      vName: brand.vName,
      tBranddescription: brand.tBranddescription,
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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Brand </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column gap-3 p-5">
          <CustomInput
            autoComplete={"off"}
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
            autoComplete={"off"}
            type="textarea"
            placeholder="Brand Description"
            name="tBranddescription"
            value={formik.values.tBranddescription}
            onChange={formik.handleChange}
            id={`${idPrefix}tBranddescription`}
            error={
              formik.errors.tBranddescription &&
              formik.touched.tBranddescription
            }
            errortext={formik.errors.tBranddescription}
          />
          <button type="submit" className="submitbuttoncustom ">
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditBrandModal;
