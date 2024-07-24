import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPayment } from "../types";
import { redDomain } from "../utils/constants";

//create payment api slice
export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: redDomain }),
  tagTypes: ["Payment"],

  endpoints: (builder) => ({
    getPayments: builder.query<TPayment[], void>({
      query: () => "/payments",

      providesTags: ["Payment"],
    }),

    getPaymentsById: builder.query<TPayment[], number>({
      query: (booking_id) => `/payments/${booking_id}`,
      providesTags: [{ type: "Payment", id: "LIST" }],
    }),
    createPayment: builder.mutation<TPayment, Partial<TPayment>>({
      query: (newPayment) => ({
        url: "/checkout-session",
        method: "POST",
        body: newPayment,
        providesTags: [{ type: "Payment", id: "LIST" }],
      }),
      invalidatesTags: ["Payment"],
    }),
    updatePayment: builder.mutation<
      TPayment,
      { id: number; updatedPayment: Partial<TPayment> }
    >({
      query: ({ id, updatedPayment }) => ({
        url: `/payments/${id}`,
        method: "PUT",
        body: updatedPayment,
        providesTags: [{ type: "Payment", id: "LIST" }],
      }),
      invalidatesTags: ["Payment"],
    }),
    deletePayment: builder.mutation<void, number>({
      query: (id) => ({
        url: `/payments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});
