import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/actions/noteActions";

const initialValues = {
  title: "",
  description: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title field cannot be empty"),
  description: Yup.string().required("Description field cannot be empty"),
});

export default function AddNote({ modal, toggle,notify }) {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const finalValues = {...values,lastModified: Date.now()}
    dispatch(createNote(finalValues))
    resetForm();
    toggle();
    notify();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Note</ModalHeader>
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
              Create
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </Formik>
      </ModalBody>
      {/* <ModalFooter>
        <Button
          color="primary"
          style={{ backgroundColor: "rgb(105,92,254)", border: "none" }}
        >
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter> */}
    </Modal>
  );
}
