import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { View } from "react-native";

export default function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <View style={{ flexDirection: "column" }}>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectedItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}
