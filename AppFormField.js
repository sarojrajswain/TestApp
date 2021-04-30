import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";

function AppFormField(
  { name, width, placeholder, style, onSubmitEditing, returnKeyType },
  ref
) {
  const { setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        name={name}
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        width={width}
        ref={ref}
        name={name}
        placeholder={placeholder}
        style={style}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        ref={ref}
      />
    </>
  );
}

const forwardAppFormField = React.forwardRef(AppFormField);

export default forwardAppFormField;
