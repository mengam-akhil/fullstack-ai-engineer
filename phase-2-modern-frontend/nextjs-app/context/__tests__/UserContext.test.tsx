import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import { UserProvider } from "../UserContext";

import UserContextTestComponent from "../../components/UserContextTestComponent";

describe("UserContext", () => {
  test("provides the default user", () => {
    render(
      <UserProvider>
        <UserContextTestComponent />
      </UserProvider>
    );

    expect(
      screen.getByTestId("user-name")
    ).toHaveTextContent("Akhil Kumar");

    expect(
      screen.getByTestId("user-email")
    ).toHaveTextContent("akhil@example.com");

    expect(
      screen.getByTestId("user-role")
    ).toHaveTextContent(
      "Full Stack AI Engineer"
    );
  });

  test("updates the global user name", () => {
    render(
      <UserProvider>
        <UserContextTestComponent />
      </UserProvider>
    );

    expect(
      screen.getByTestId("user-name")
    ).toHaveTextContent("Akhil Kumar");

    fireEvent.click(
      screen.getByRole("button", {
        name: "Update User",
      })
    );

    expect(
      screen.getByTestId("user-name")
    ).toHaveTextContent("Updated User");
  });
});