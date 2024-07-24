import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLocation } from "../types";
import { devDomain } from "../utils/constants";

//create location api slice
export const locationsApi = createApi({
  //reduce path
  reducerPath: "locationApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: devDomain }),

  //tag types
  tagTypes: ["Location"],

  //create build in endpoints
  endpoints: (builder) => ({
    //get locations
    getLocations: builder.query<TLocation[], void>({
      query: () => "/locationsBranches",

      //provide location tag to be used in the cache
      providesTags: [{ type: "Location", id: "LIST" }],
    }),

    //get location by id
    getLocationById: builder.query<TLocation, number>({
      query: (id) => `/locationsBranches/${id}`,

      //provide location tag to be used in the cache
      // the statement id: "LIST" is used to invalidate the cache when a new location is created
      // thi
      providesTags: [{ type: "Location", id: "LIST" }],
    }),

    //create location
    createLocation: builder.mutation<TLocation, Partial<TLocation>>({
      query: (newLocation) => ({
        url: "/locationsBranches",
        method: "POST",
        body: newLocation,
        providesTags: [{ type: "Location", id: "LIST" }],
      }),

      //provide location tag to be used in the cache
      invalidatesTags: [{ type: "Location", id: "LIST" }],
    }),

    //update location
    updateLocation: builder.mutation<
      TLocation,
      { id: number; name: string; address: string; updated: undefined }
    >({
      query: ({ id, ...updated }) => ({
        url: `/locationsBranches/${id}`,
        method: "PUT",
        body: updated,
        providesTags: [{ type: "Location", id: "LIST" }],
      }),

      //provide location tag to be used in the cache
      invalidatesTags: [{ type: "Location", id: "LIST" }],
    }),

    //delete location
    deleteLocation: builder.mutation<void, number>({
      query: (id) => ({
        url: `/locationsBranches/${id}`,
        method: "DELETE",
        providesTags: [{ type: "Location", id: "LIST" }],
      }),

      //provide location tag to be used in the cache
      invalidatesTags: [{ type: "Location", id: "LIST" }],
    }),
  }),
});
