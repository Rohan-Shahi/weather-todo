import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editNote } from "../../redux/actions/noteActions";

const validationSchema = Yup.object({
  title: Yup.string().required("Title field cannot be empty"),
  description: Yup.string().required("Description field cannot be empty"),
});

export default function EditNote({ modal, toggle,editTitle,editDesc,editInd }) {
  const dispatch = useDispatch();
  const initialValues = {
    title: editTitle,
    description: editDesc,
  };

  const onSubmit = (values, { resetForm }) => {
    const finalValue = {...values,editInd,lastModified: Date.now()};
    dispatch(editNote(finalValue));
    resetForm();
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Note</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <label htmlFor="title" className="form-label">
              Note Title :{" "}
            </label>
            <br />
            <Field type="text" name="title" className="form-control" />
            <div className="error" style={{ color: "red" }}>
              <ErrorMessage name="title" />
            </div>
            <br />

            <label htmlFor="description" className="form-label">
              Description :{" "}
            </label>
            <br />
            <Field type="text" name="description" className="form-control" />
            <div className="error" style={{ color: "red" }}>
              <ErrorMessage name="description" />
            </div>
            <br />
            <br />
            <Button
              color="primary"
              style={{ backgroundColor: "rgb(105,92,254)", border: "none" }}
              type="submit"
              className="me-2"
            >
              Update
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </Formik>
      </ModalBody>

    </Modal>
  );
}
