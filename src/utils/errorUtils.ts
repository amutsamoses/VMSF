// utils/errorUtils.ts

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type FetchErrorData = {
  error?: string;
};

export function getErrorMessage(
  error: FetchBaseQueryError | SerializedError | undefined
): React.ReactNode {
  if (!error) return null;
  
  if ('status' in error) {
    // FetchBaseQueryError
    const errorData = error.data as FetchErrorData;
    return errorData.error ? errorData.error : JSON.stringify(error.data);
  }
  
  if ('message' in error) {
    // SerializedError
    return error.message;
  }
  
  return null;
}
