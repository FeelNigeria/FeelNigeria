"use client";

import { Box, Button, Stack, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuFlag,
  LuPlane,
  LuCalendar,
  LuLock
} from "react-icons/lu";
import axios from "axios";
import RegistrationFormField, { FormValues } from "./RegistrationFormField";

const RegistrationForm = () => {
  const { handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      name: data.fullName,
      phone_number: data.phoneNumber,
      email: data.email,
      nationality: data.nationality,
      preferred_destination: data.preferredDestination,
      password: data.password,
      travel_date: data.travelDate,
      username: data.username,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/store/customers/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });

  const fields = [
    {
      name: "fullName",
      required: true,
      icon: LuUser,
      type: "text",
    },
    {
      hStack: [
        {
          name: "email",
          required: true,
          icon: LuMail,
          type: "email",
        },
        {
          name: "username",
          required: true,
          icon: LuUser,
        },
      ],
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
      hStack: [
        {
          name: "preferredDestination",
          required: true,
          icon: LuPlane,
        },
        {
          name: "travelDate",
          required: true,
          icon: LuCalendar,
          type: "date",
        },
      ],
    },
    {
      hStack: [
        {
          name: "password",
          required: true,
          icon: LuLock,
          type: "password",
        },
        {
          name: "confirmPassword",
          required: true,
          icon: LuLock,
          type: "password",
        },
      ],
    },
  ];

  return (
    <Box>
      <Header child="Register with Us" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          {fields.map((field) => {
            if (field.name) {
              return (
                <RegistrationFormField
                  key={field.name}
                  label={field.name
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  startElement={<field.icon />}
                  fieldName={field.name as keyof FormValues}
                  required={field.required}
                  fieldType={field?.type}
                />
              );
            } else if (field.hStack) {
              return (
                <HStack
                  w={"100%"}
                  align={"flex-end"}
                  flexDirection="row"
                  key={field.hStack[0].name}
                >
                  {field.hStack.map((hField) => (
                    <RegistrationFormField
                      key={hField.name}
                      label={hField.name
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      startElement={<hField.icon />}
                      fieldName={hField.name as keyof FormValues}
                      required={hField.required}
                      fieldType={hField?.type}
                    />
                  ))}
                </HStack>
              );
            }
            return null;
          })}
          <Button
            type="submit"
            className="text-white btn btn-success"
            borderRadius={3}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
