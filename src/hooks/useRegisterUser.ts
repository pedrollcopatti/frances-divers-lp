import { addUserInList, registerUserQuery } from "../api/requests";
import { RegisterUserResponse, User } from "../types";

function useRegisterUser() {
   async function registerUser(user: User) {
      const request = await registerUserQuery(user).then((res) => {
         if (res.status === 201) {
            const response: RegisterUserResponse = res.data
            addUserInList({ contact: Number(response.contact.id), list: 2, status: 1 }).then((ret) => {
               if (res.status === 201) {
                  return {
                     msg: "Usuário cadastrado com sucesso",
                     registered: true
                  }
               }
               return {
                  registered: false,
                  msg: `${res.data.errors[0].title}`
               }
            })
         }
         return {
            registered: false,
            msg: `${res.data.errors[0].title}`
         }
      })
      return request
   }

   return {
      registerUser,
   }
}

export default useRegisterUser;
