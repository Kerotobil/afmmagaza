import { TextField, TextFieldProps } from "@shopify/polaris";
import { useField, useFormikContext } from "formik";
import React from "react";
import { useCallback } from "react";
import { isNil } from 'ramda';

type Props = Omit<TextFieldProps, 'onChange'> & {
  name: string;
};

export const FormTextField: React.FC<Props> = (props) => {

  const [field, meta, helpers] = useField(props.name);
  const ctx = useFormikContext();

  if (ctx.isSubmitting && !meta.touched) {
    helpers.setTouched(true);
  }

  const error = meta.touched && meta.error;
  const disabled = props.disabled || ctx.isSubmitting;

  const handleChange = useCallback((value: string) => {
    helpers.setValue(value);
  }, []);

  const handleClearButton = useCallback(() => {
    helpers.setValue('');
    helpers.setTouched(false);
  }, []);

  const handleBlur = useCallback(() => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  }, []);


  const value = isNil(field.value) ? null : String(field.value);

  return (
    <TextField
      error={error}
      {...props}
      id={field.name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onClearButtonClick={handleClearButton}
      disabled={disabled}
    />
  );

};
