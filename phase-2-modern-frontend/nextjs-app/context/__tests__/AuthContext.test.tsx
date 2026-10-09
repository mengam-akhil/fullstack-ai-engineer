import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import { AuthProvider } from "../AuthContext";

import AuthContextTestComponent from "../../components/AuthContextTestComponent";

describe("AuthContext", () => {
  test("starts unauthenticated", () => {
    render(
      <AuthProvider>
        <AuthContextTestComponent />
      </AuthProvider>
    );

    expect(
      screen.getByTestId("auth-status")
    ).toHaveTextContent("Not Authenticated");
  });

  test("logs the user in", () => {
    render(
      <AuthProvider>
        <AuthContextTestComponent />
      </AuthProvider>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Login",
      })
    );

    expect(
      screen.getByTestId("auth-status")
    ).toHaveTextContent("Authenticated");

    expect(
      screen.getByTestId("auth-user")
    ).toHaveTextContent("Akhil Kumar");
  });

  test("logs the user out", () => {
    render(
      <AuthProvider>
        <AuthContextTestComponent />
      </AuthProvider>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Login",
      })
    );

    expect(
      screen.getByTestId("auth-status")
    ).toHaveTextContent("Authenticated");

    fireEvent.click(
      screen.getByRole("button", {
        name: "Logout",
      })
    );

    expect(
      screen.getByTestId("auth-status")
    ).toHaveTextContent("Not Authenticated");

    expect(
      screen.queryByTestId("auth-user")
    ).not.toBeInTheDocument();
  });
});