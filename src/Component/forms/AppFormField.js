import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <View style={{ flexDirection: "column" }}>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormField;
