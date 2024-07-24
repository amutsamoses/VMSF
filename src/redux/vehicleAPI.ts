import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TVehicle } from "../types";
import { devDomain } from "../utils/constants";

//create vehicle api slice
export const vehiclesApi = createApi({
  //reduce path
  reducerPath: "vehiclesApi",

  //define base query endpoint to be used by the api
  baseQuery: fetchBaseQuery({ baseUrl: devDomain }),

  //tag types
  tagTypes: ["Vehicle"],

  //create build in endpoints
  endpoints: (builder) => ({
    //get vehicles
    getVehicles: builder.query<TVehicle[], number | void>({
      query: () => "/vehiclespecs-with-vehicles",

      //provide vehicle tag to be used in the cache
      providesTags: ["Vehicle"],
    }),

    //get vehicle by id
    getVehicleById: builder.query<TVehicle, number>({
      query: (id) => `/vehiclespecs-vehicles/${id}`,

      //provide vehicle tag to be used in the cache
      // the statement id: "LIST" is used to invalidate the cache when a new vehicle is created
      // thi
      providesTags: [{ type: "Vehicle", id: "LIST" }],
    }),

    //create vehicle
    createVehicle: builder.mutation<TVehicle, Partial<TVehicle>>({
      query: (newVehicle) => ({
        url: "/vehiclespecs-vehicles",
        method: "POST",
        body: newVehicle,
        providesTags: [{ type: "Vehicle", id: "LIST" }],
      }),

      //provide vehicle tag to be used in the cache
      invalidatesTags: ["Vehicle"],
    }),

    //update vehicle
    updateVehicle: builder.mutation<
      TVehicle,
      { id: number; updated: TVehicle }
    >({
      query: ({ id, ...updated }) => ({
        url: `/vehiclespecs/vehicles/${id}`,
        method: "PUT",
        body: updated,
        providesTags: [{ type: "Vehicle", id: "LIST" }],
      }),

      //provide vehicle tag to be used in the cache
      invalidatesTags: ["Vehicle"],
    }),

    //delete vehicle
    deleteVehicle: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/vehiclespecs-vehicles/${id}`,
        method: "DELETE",
        providesTags: [{ type: "Vehicle", id: "LIST" }],
      }),

      //provide vehicle tag to be used in the cache
      invalidatesTags: [{ type: "Vehicle", id: "LIST" }],
    }),
  }),
});
