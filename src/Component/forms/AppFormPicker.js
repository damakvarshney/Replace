import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "./../AppPicker";
import ErrorMessage from "./ErrorMessage";
import PickerItem from "./../PickerItem";
const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
