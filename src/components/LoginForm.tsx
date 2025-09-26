import React from "react";
import Header from "./Header";
import { Box, Button, HStack, Spinner, Stack } from "@chakra-ui/react";
import ChakraFormField, { FormValues } from "./ChakraFormField";
import { LuLock, LuMail } from "react-icons/lu";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";

const LoginForm: React.FC = () => {
  const { handleSubmit, register } = useForm<FormValues>();
  const { createData, data, isLoading } = useLogin();

  const onSubmit = handleSubmit(async (formData) => {
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    await createData(payload);

    if (data) {
      console.log("Form submitted successfully:", data);
      window.location.href = "/";
    }
  });

  return (
    <Box>
      <Header child="Login to Your Account" />
      <form className="m-5" onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          <ChakraFormField
            label="Email"
            startElement={<LuMail />}
            fieldName="email"
            register={register}
            required={true}
          />
          <ChakraFormField
            label="Password"
            startElement={<LuLock />}
            fieldName="password"
            register={register}
            required={true}
            fieldType="password"
          />
          {isLoading ? (
            <HStack>
              <Button
                type="submit"
                className="text-white btn btn-success"
                borderRadius={3}
              >
                Submit
              </Button>
              <Spinner />
            </HStack>
          ) : (
            <Button
              type="submit"
              className="text-white btn btn-success"
              borderRadius={3}
            >
              Login
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
