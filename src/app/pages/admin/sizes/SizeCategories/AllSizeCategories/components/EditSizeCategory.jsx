import React from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../../../../../../components/CustomInput/CustomInput";

const validationSchema = Yup.object().shape({
  vName: Yup.string().required("SizeCategory Name is required"),
});

const EditSizeCategoryModal = ({ sizeCategory, show, handleClose }) => {
  const idPrefix = "EditSizeCategory";
  const formik = useFormik({
    initialValues: {
      vName: sizeCategory.vName,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      //   addBrand(values)
      //     .then((res) => {
      //       toast.success(res.data.message);
      //       resetForm();
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       toast.error(err.response.data.message || "Something went wrong");
      //     });
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
            placeholder="SizeCategory"
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
      </Modal.Body>
    </Modal>
  );
};

export default EditSizeCategoryModal;
