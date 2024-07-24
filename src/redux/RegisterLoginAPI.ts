import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLogin, TRegister, TUser } from "../types";
import { redDomain } from "../utils/constants";

export interface AuthResponse {
  user: TUser;
  token: string;
}

//create booking api slice
export const registerLoginApi = createApi({
  //reduce path
  reducerPath: "registerLoginApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: redDomain }),

  //tag types
  tagTypes: ["RegisterLogin"],

  //create build in endpoints
  endpoints: (builder) => ({
    //register
    register: builder.mutation<AuthResponse, TRegister>({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
        providesTags: ["RegisterLogin"],
      }),

      //provide tags to be used in the cache
      invalidatesTags: ["RegisterLogin"],
    }),

    //login
    login: builder.mutation<AuthResponse, TLogin>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
        providesTags: ["RegisterLogin"],
      }),

      invalidatesTags: ["RegisterLogin"],
    }),
  }),
});
