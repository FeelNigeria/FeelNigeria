import usePostData from "./usePostData";

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

const useCreateCustomer = () =>
  usePostData<CreateCustomerPayload>("/store/customers/");
export default useCreateCustomer;
