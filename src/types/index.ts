export type User = {
   email: string;
   firstName: string;
   lastName: string;
   phone: string;
}

export type AddUserInListProps ={
   list: number,
   contact: number,
   status: number
}

export type RegisterUserResponse = {
   contact: {
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      id: string,
   }
}