import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TFleet } from "../types";

//create fleet api slice
export const fleetApi = createApi({
  //reduce path
  reducerPath: "fleetApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),

  //tag types
  tagTypes: ["Fleet"],

  //create build in endpoints
  endpoints: (builder) => ({
    //get fleets
    getFleets: builder.query<TFleet[], void>({
      query: () => "/fleet",

      //provide fleet tag to be used in the cache
      providesTags: [{ type: "Fleet", id: "LIST" }],
    }),

    //get fleet by id
    getFleetById: builder.query<TFleet, number>({
      query: (id) => `/fleet/${id}`,

      //provide fleet tag to be used in the cache
      // the statement id: "LIST" is used to invalidate the cache when a new fleet is created
      // thi
      providesTags: [{ type: "Fleet", id: "LIST" }],
    }),

    //create fleet
    createFleet: builder.mutation<TFleet, Partial<TFleet>>({
      query: (newFleet) => ({
        url: "/fleet",
        method: "POST",
        body: newFleet,
        providesTags: [{ type: "Fleet", id: "LIST" }],
      }),

      //provide fleet tag to be used in the cache
      invalidatesTags: [{ type: "Fleet", id: "LIST" }],
    }),

    //update fleet
    updateFleet: builder.mutation<TFleet, { id: number; updated: TFleet }>({
      query: ({ id, ...updated }) => ({
        url: `/fleet/${id}`,
        method: "PUT",
        body: updated,
        providesTags: [{ type: "Fleet", id: "LIST" }],
      }),

      //provide fleet tag to be used in the cache
      invalidatesTags: [{ type: "Fleet", id: "LIST" }],
    }),

    //delete fleet
    deleteFleet: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/fleet/${id}`,
        method: "DELETE",
        providesTags: [{ type: "Fleet", id: "LIST" }],
      }),

      //provide fleet tag to be used in the cache
      invalidatesTags: [{ type: "Fleet", id: "LIST" }],
    }),
  }),
});
