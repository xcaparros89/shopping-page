import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoriesList from "./CategoriesList";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../../../lib/AuthProvider";

test("<CategoriesList /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <UserProvider>
        <CategoriesList />
      </UserProvider>
    </MemoryRouter>,
    div
  );
});
