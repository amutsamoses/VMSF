import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../types";

//create user api slice
export const usersApi = createApi({
  //reduce path
  reducerPath: "usersApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),

  //tag types
  tagTypes: ["User"],

  //create build in endpoints
  endpoints: (builder) => ({
    //get users
    getUsers: builder.query<TUser[], void>({
      query: () => "/users",

      //provide user tag to be used in the cache
      providesTags: [{ type: "User", id: "LIST" }],
    }),

    //get user by id
    getUserById: builder.query<TUser, number>({
      query: (user_id) => `/users/${user_id}`,

      //provide user tag to be used in the cache
      // the statement id: "LIST" is used to invalidate the cache when a new user is created
      // thi
      providesTags: [{ type: "User", id: "LIST" }],
    }),

    //create user
    createUser: builder.mutation<TUser, Partial<TUser>>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
        providesTags: [{ type: "User", id: "LIST" }],
      }),

      //provide user tag to be used in the cache
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    //update user
    updateUser: builder.mutation<TUser, Partial<TUser>>({
      query: ({ user_id, ...updated }) => ({
        url: `/users/${user_id}`,
        method: "PUT",
        body: updated,
        providesTags: [{ type: "User", id: "LIST" }],
      }),

      //provide user tag to be used in the cache
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    //delete user
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (user_id) => ({
        url: `/users/${user_id}`,
        method: "DELETE",
        providesTags: [{ type: "User", id: "LIST" }],
      }),

      //provide user tag to be used in the cache
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});
