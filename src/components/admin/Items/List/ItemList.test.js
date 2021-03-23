import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemsList from "./ItemsList";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../../../lib/AuthProvider";

test("<ItemsList /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <UserProvider>
        <ItemsList />
      </UserProvider>
    </MemoryRouter>,
    div
  );
});
