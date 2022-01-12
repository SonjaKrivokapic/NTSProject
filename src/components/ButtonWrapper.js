import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";

//Formik button submitt
const ButtonWrapper = ({ children, buttonStyles, ...otherProps }) => {
  const { submitForm } = useFormikContext();


  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    color: "primary",
    fullWidth: true,
    onSubmit: handleSubmit,
    ...otherProps,
  };

  return (
    <Button {...configButton}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
