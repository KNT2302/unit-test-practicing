import { error } from "console";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "../../component/Input";
import styles from "@/styles/Information.module.css";
import { useMutation } from "react-query";
import Modal from "../../component/Modal/Modal";
import { Information } from "@/utils/model";
import { list } from "@/pages";
import { queryClient } from "@/pages/_app";

const InFromationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const NewInformation = () => {
  const addInformationMutation = useMutation({
    mutationFn: addInformation,
    onSuccess: () => queryClient.invalidateQueries(["informations"]),
  });
  return (
    <Modal modalName="New">
      {(handleClose) => (
        <>
          <h1>New Information</h1>
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={InFromationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleClose();
                addInformationMutation.mutate({ ...values });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label id="email">Email:</label>
                <Input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  aria-labelledby="email"
                />
                <p className={styles.error}>
                  {errors.email && touched.email && errors.email}
                </p>
                <label id="firstName">Firstname:</label>
                <Input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  aria-labelledby="firstName"
                />
                <p className={styles.error}>
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
                <label id="lastName">Lastname:</label>
                <Input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  aria-labelledby="lastName"
                />
                <p className={styles.error}>
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </>
      )}
    </Modal>
  );
};

export default NewInformation;

const addInformation: ({
  firstName,
  lastName,
  email,
}: Information) => Promise<void> = async ({ firstName, lastName, email }) => {
  const id = list.length + 1;
  list.push({ id, firstName, lastName, email });
};
