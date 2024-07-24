import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TBooking } from "../types";
import { devDomain } from "../utils/constants";

//create booking api slice

export const bookingsApi = createApi({
  //reduce path
  reducerPath: "bookingsApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: devDomain }),

  //tag types
  tagTypes: ["Booking"],

  //create build in endpoints
  endpoints: (builder) => ({
    //get bookings
    getBookings: builder.query<TBooking[], void>({
      query: () => "/bookings",

      //provide booking tag to be used in the cache
      providesTags: ["Booking"],
    }),

    //get booking by id
    getBookingById: builder.query<TBooking, number>({
      query: (id) => `/bookings/${id}`,

      //provide booking tag to be used in the cache
      // the statement id: "LIST" is used to invalidate the cache when a new booking is created
      // thi
      providesTags: [{ type: "Booking", id: "LIST" }],
    }),

    //create booking
    createBooking: builder.mutation<TBooking, Partial<TBooking>>({
      query: (newBooking) => ({
        url: "/bookings",
        method: "POST",
        body: newBooking,
        providesTags: [{ type: "Booking", id: "LIST" }],
      }),

      //provide booking tag to be used in the cache
      invalidatesTags: ["Booking"],
    }),

    //update booking
    updateBooking: builder.mutation<
      TBooking,
      { id: number; booking_status: string }
    >({
      query: ({ id, booking_status }) => ({
        url: `/bookings/${id}/booking_status`,
        method: "PUT",
        body: { booking_status },
        providesTags: [{ type: "Booking", id: "LIST" }],
      }),

      //provide booking tag to be used in the cache
      invalidatesTags: ["Booking"],
    }),

    //delete booking
    deleteBooking: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
        providesTags: [{ type: "Booking", id: "LIST" }],
      }),

      //provide booking tag to be used in the cache
      invalidatesTags: ["Booking"],
    }),
  }),
});
