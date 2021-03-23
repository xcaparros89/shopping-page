import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../../lib/AuthProvider";

test("<Header /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <UserProvider>
        <Header />
      </UserProvider>
    </MemoryRouter>,
    div
  );
});
