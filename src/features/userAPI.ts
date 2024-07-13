import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//create user
//get user
//update user
//delete user

//creating user interface
interface TIUser {
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
}

//create user api slice

export const userAPI = createApi({
  //reducer path
  reducerPath: "userAPI",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),

  //creating build in endpoints
  endpoints: (buildler) => ({
    //get user
    getUser: buildler.query<TIUser[], void>({
      query: (userId) => `users/${userId}`,

      //providing user tag to cache the data
      providesTags: ["getUserTag"],
    }),
    //create user
    //Partial<TUser> returns a new type that has all the properties of TUser set to optional
    createUser: buildler.mutation<TIUser, Partial<TIUser>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
        providesTags: ["createUserTag"],
      }),
      //invalidating the cache after creating a new user to refetch the data
      invalidatesTags: ["getUserTag"] as FullTagDescription<never>[],
    }),

    //delete user
    //the essence of void is to tell the function that it does not return any value
    deleteUser: buildler.mutation<number, number>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "DELETE",
        providesTags: ["deleteUserTag"],
      }),
      //invalidating the cache after deleting a user to refetch the data
      invalidatesTags: ["getUserTag"],
    }),

    //update user
    updateUser: buildler.mutation<TIUser, Partial<TIUser>>({
      //we to spread the user object and update the user object
      //destructuring the id from the user object
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: patch,
        providesTags: ["updateUserTag"],
      }),
    }),
  }),
});

//exporting auto generated hooks
//append the key word use to the name of the endpoint
//we append the query or mutation to the name of the endpoint to illustrate the type of endpoint

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userAPI;
