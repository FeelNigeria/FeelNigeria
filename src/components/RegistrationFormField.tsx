import { Field, Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  password: string;
  confirmPassword: string;
  preferredDestination: string;
  travelDate: string;
}

interface Props {
  label: string;
  fieldName: keyof FormValues;
  startElement?: React.ReactNode;
  required?: boolean;
 fieldType?: string;
}

const RegistrationFormField: React.FC<Props> = ({
  label,
  startElement,
  fieldName,
  required = false,
  fieldType,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <Field.Root required={required} invalid={!!errors[fieldName]}>
      <Field.Label>
        {label}
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup startElement={startElement}>
        <Input type={fieldType} {...register(fieldName)} />
      </InputGroup>
      <Field.ErrorText>{errors[fieldName]?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default RegistrationFormField;
