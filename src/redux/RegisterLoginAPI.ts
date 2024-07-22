import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLogin, TRegister } from "../types";

//create booking api slice
export const registerLoginApi = createApi({
  //reduce path
  reducerPath: "registerLoginApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/auth" }),

  //tag types
  tagTypes: ["RegisterLogin"],

  //create build in endpoints
  endpoints: (builder) => ({
    //register
    register: builder.mutation<TRegister, TRegister>({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
        providesTags: ["RegisterLogin"],
      }),

      //provide tags to be used in the cache
      invalidatesTags: ["RegisterLogin"],
    }),

    //login
    login: builder.mutation<TLogin, TLogin>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
        providesTags: ["RegisterLogin"],
      }),

      invalidatesTags: ["RegisterLogin"],
    }),
  }),
});
