import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCustomerSupport } from "../types";
import { devDomain } from "../utils/constants";

//create a slice
export const customerSupportApi = createApi({
  //reducerPath
  reducerPath: "customerSupportApi",

  //baseQuery
  baseQuery: fetchBaseQuery({ baseUrl: devDomain }),

  //tagTypes
  tagTypes: ["CustomerSupport"],

  //endpoints
  endpoints: (builder) => ({
    //get customer support
    getCustomerSupport: builder.query<TCustomerSupport[], void>({
      query: () => "/customerSupportTickets",

      //provide customer support tag to be used in the cache
      providesTags: ["CustomerSupport"],
    }),

    //get by id
    getCustomerSupportById: builder.query<TCustomerSupport, number>({
      query: (id) => `/customerSupportTickets/${id}`,

      //provide customer support tag to be used in the cache
      providesTags: [{ type: "CustomerSupport", id: "LIST" }],
    }),

    //create customer support
    createCustomerSupport: builder.mutation<
      TCustomerSupport,
      Partial<TCustomerSupport>
    >({
      query: (newCustomerSupport) => ({
        url: "/customerSupportTickets",
        method: "POST",
        body: newCustomerSupport,
        providesTags: [{ type: "CustomerSupport", id: "LIST" }],
      }),

      //provide customer support tag to be used in the cache
      invalidatesTags: ["CustomerSupport"],
    }),

    //update customer support
    updateCustomerSupport: builder.mutation<
      TCustomerSupport,
      { id: number; updated: Partial<TCustomerSupport> }
    >({
      query: ({ id, ...updated }) => ({
        url: `/customerSupportTickets/${id}`,
        method: "PUT",
        body: updated,
        providesTags: [{ type: "CustomerSupport", id: "LIST" }],
      }),

      //provide customer support tag to be used in the cache
      invalidatesTags: ["CustomerSupport"],
    }),

    //delete customer support
    deleteCustomerSupport: builder.mutation<
      { success: boolean; id: number },
      number
    >({
      query: (id) => ({
        url: `/customerSupportTickets/${id}`,
        method: "DELETE",
        providesTags: [{ type: "CustomerSupport", id: "LIST" }],
      }),

      //provide customer support tag to be used in the cache
      invalidatesTags: ["CustomerSupport"],
    }),
  }),
});
