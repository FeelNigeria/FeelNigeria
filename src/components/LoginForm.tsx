import React from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import ChakraFormField, { FormValues } from "./ChakraFormField";
import { LuUser } from "react-icons/lu";
import { useForm } from "react-hook-form";


const LoginForm: React.FC = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      username: data.username,
      password: data.password,
    };
  });

  return (
    <Box>
      <Header child="Login to Your Account" />
      <form className="m-5" onSubmit={onSubmit}>
        <ChakraFormField
          label="Username"
          startElement={<LuUser />}
          fieldName="username"
          register={register}
          required={true}
        />
        <ChakraFormField
          label="Password"
          startElement={<LuUser />}
          fieldName="password"
          register={register}
          required={true}
          fieldType="password"
        />
      </form>
    </Box>
  );
};

export default LoginForm;
