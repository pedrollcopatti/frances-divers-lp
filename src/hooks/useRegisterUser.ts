import { useToast } from "@chakra-ui/react";
import { useMemo } from "react";
import { useAddUserInList, useRegisterUser } from "../api/requests";
import { RegisterUserResponse, User } from "../types";

function useRegister() {
  const toast = useToast();

  const { mutate: mutateRegisterUser, isLoading: isLoadingRegisterUser, data } =
    useRegisterUser();
  const { mutate: mutateAddUserList, isLoading: isLoadingAddUserInList,  } =
    useAddUserInList();

   const isLoading = useMemo(()=> isLoadingAddUserInList || isLoadingRegisterUser,[isLoadingAddUserInList, isLoadingRegisterUser])

   console.log(isLoading);
   console.log(data);
  async function registerUser(user: User, onOpen: ()=> void, clear: () => void) {
    mutateRegisterUser(user, {
      onSuccess: (res) => {
        mutateAddUserList({ contact: res.data.contact.id, list: 2, status: 1 }, {
               onSuccess: () => {
                  onOpen();
                  clear()
               }
             });
      },
      onError: (res: any) => {
         toast({
            title: 'Ops, ocorreu um erro :(',
            description: res.response.data.errors[0].title,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
      }
    });
  }

  return {
   registerUser,
   isLoading
   
 };
}
export default useRegister;
