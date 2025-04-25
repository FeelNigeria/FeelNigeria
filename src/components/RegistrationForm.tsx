"use client";

import { Box, Button, Field, Input, Stack, InputGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { LuUser, LuMail, LuPhone, LuFlag, LuPlane, LuCalendar } from "react-icons/lu";

interface FormValues {
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

const Demo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  const fields = [
    {
      name: "fullName",
      required: true,
      icon: LuUser,
    },
    {
      name: "email",
      required: true,
      icon: LuMail,
    },
    {
      name: "phoneNumber",
      required: true,
      icon: LuPhone,
    },
    {
      name: "nationality",
      required: true,
      icon: LuFlag,
    },
    {
      name: "preferredDestination",
      required: true,
      icon: LuPlane,
    },
    {
      name: "travelDate",
      required: true,
      icon: LuCalendar,
    },
  ];

  return (
    <Box>
      <Header child="Register with Us" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          {fields.map((field) => (
            <Field.Root
              key={field.name}
              required={field.required}
              invalid={!!errors[field.name as keyof FormValues]}
            >
              <Field.Label>
                {field.name
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}{" "}
                {field.required && <Field.RequiredIndicator />}
              </Field.Label>
              <InputGroup startElement={<field.icon />}>
                <Input {...register(field.name as keyof FormValues)} />
              </InputGroup>
              <Field.ErrorText>
                {errors[field.name as keyof FormValues]?.message}
              </Field.ErrorText>
            </Field.Root>
          ))}

          <Field.Root
              required
              invalid={!!errors.travelDate}
            >
              <Field.Label>
                Travel Date <Field.RequiredIndicator />
              </Field.Label>
              <InputGroup startElement={<LuPlane />}>
                <Input {...register(field.name as keyof FormValues)} />
              </InputGroup>
              <Field.ErrorText>
                {errors[field.name as keyof FormValues]?.message}
              </Field.ErrorText>
            </Field.Root>

          <Button type="submit" backgroundColor="green.700" borderRadius={3}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Demo;
