"use client";

import { Box, Button, Field, Input, Stack, InputGroup, HStack } from "@chakra-ui/react";
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
          <HStack w={"100%"} align={"flex-end"}>
            <Field.Root required
                invalid={!!errors.travelDate}
              >
                <Field.Label>
                  Preferred Destination<Field.RequiredIndicator />
                </Field.Label>
                <InputGroup startElement={<LuPlane />}>
                  <Input {...register("preferredDestination")} />
                </InputGroup>
                <Field.ErrorText>
                  {errors.preferredDestination?.message}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root required
                invalid={!!errors.travelDate}
              >
                <Field.Label>
                  Travel Date <Field.RequiredIndicator />
                </Field.Label>
                <InputGroup startElement={<LuCalendar />}>
                  <Input type="date" {...register("travelDate")} />
                </InputGroup>
                <Field.ErrorText>
                  {errors.travelDate?.message}
                </Field.ErrorText>
              </Field.Root>
          </HStack>

          <Button type="submit" className="text-white" backgroundColor="green.700" borderRadius={3}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Demo;
