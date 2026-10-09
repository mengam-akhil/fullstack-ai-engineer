import axios from "axios";

export function getApiErrorMessage(
  error: unknown
): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    const detail = error.response?.data?.detail;

    if (typeof detail === "string") {
      return detail;
    }

    switch (status) {
      case 400:
        return "The request was invalid. Please check your information.";

      case 401:
        return "Authentication required. Please sign in.";

      case 403:
        return "You do not have permission to perform this action.";

      case 404:
        return "The requested resource was not found.";

      case 409:
        return "This request conflicts with existing data.";

      case 422:
        return "Some information is invalid. Please check your input.";

      case 429:
        return "Too many requests. Please try again later.";

      case 500:
        return "The server encountered an error. Please try again later.";

      case 502:
      case 503:
      case 504:
        return "The service is temporarily unavailable. Please try again later.";

      default:
        if (!error.response) {
          return "Unable to connect to the server. Please check your connection.";
        }

        return "Something went wrong. Please try again.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}