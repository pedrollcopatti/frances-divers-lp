import { AddUserInListProps, User } from "../types";
import { api } from "./api";

export async function registerUserQuery(user: User) {
   const response = await api.post('/contacts', {
      contact: {
         user
      }
   });
   return response;
}

export async function addUserInList(data: AddUserInListProps) {
   const response = await api.post('/contactLists', {
      contactList: {
         data
      }
   });
   return response;
}