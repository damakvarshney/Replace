import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInputList from "./../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FormImagePicker;
