import { FormValues } from "@/components/RegistrationFormField";
import usePostData from "./usePostData";

const { data, error, isLoading, postData } = usePostData<FormValues>();

interface CreateCustomerPayload {
  name: string;
  phone_number: string;
  email: string;
  nationality: string;
  preferred_destination: string;
  password: string;
  travel_date: string;
  username: string;
}

const useCreateCustomer = (payload: CreateCustomerPayload) => {
  postData("/store/customers/", payload);

  return {
    data,
    error,
    isLoading,
  };
};

export default useCreateCustomer;
