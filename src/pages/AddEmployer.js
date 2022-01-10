import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "../utils/axios-instance";
import { Grid, Typography } from "@material-ui/core";
import TextfieldWrapper from "../components/TextFieldWrapper";
import DateTextFieldWrapper from "../components/DateTextFieldWrapper";
import ButtonWrapper from "../components/ButtonWrapper";

const AddEmployer = () => {
  const initialEmployerState = {
    name: "",
    email: "",
    phoneNumber: "",
    homeAddress: {
      city: "",
      ZIPCode: "",
      addressLine1: "",
      addressLine2: "",
    },
    dateOfEmployment: "",
    dateOfBirth: "",
  };

  const employerValidation = Yup.object().shape({
    name: Yup.string().required("Please provide name"),
    email: Yup.string()
      .email("Please provide valid email")
      .required("Please provide email"),
    phoneNumber: Yup.number()
      .typeError("Please provide only numbers")
      .required("Required"),
    homeAddress: Yup.object().shape({
      city: Yup.string().required("Required"),

      ZIPCode: Yup.string().required("Required"),
      addressLine1: Yup.string().required("Required"),
      addressLine2: Yup.string().required("Required"),
    }),
    dateOfEmployment: Yup.date().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
  });

  const handleCreateAccount = async (data, { resetForm, setErrors }) => {
    console.log(data);
    // try {
    //   await axiosInstance.post("/employees", data);

    //   resetForm(initialEmployerState);
    // } catch (err) {
    //   console.log(err.response);

    //   // let error = 'email'
    //   // if (err.response.data.message) {
    //   //     error =
    //   //         err.response.data.message.includes(
    //   //             'Емаил је већ у употреби'
    //   //         ) && 'email'
    //   //     setErrors({
    //   //         [error]: 'Унесена Е-пошта је заузета.',
    //   //     })
    //   // }
    // }
  };

  return (
    <div>
      <Formik
        initialValues={{
          ...initialEmployerState,
        }}
        validationSchema={employerValidation}
        onSubmit={handleCreateAccount}
      >
        {({ isSubmitting, values }) => (
          <Form autoComplete="off">
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Typography variant="h2">Add Employer</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper name="name" label="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper name="email" label="Email" type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper name="phoneNumber" label="Phone Number" />
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="homeAddress.city" label="City" />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper name="homeAddress.ZIPCode" label="Zip Code" />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper
                  name="homeAddress.addressLine1"
                  label="City"
                />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper
                  name="homeAddress.addressLine2"
                  label="City"
                />
              </Grid>
              <Grid item xs={12}>
                <DateTextFieldWrapper
                  id="date"
                  name="dateOfEmployment"
                  type="date"
                  format="DD-MM-YYYY"
                  value={values.dateOfEmployment}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <DateTextFieldWrapper
                  id="date"
                  name="dateOfBirth"
                  type="date"
                  format="DD-MM-YYYY"
                  value={values.dateOfBirth}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <ButtonWrapper
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Add
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEmployer;
