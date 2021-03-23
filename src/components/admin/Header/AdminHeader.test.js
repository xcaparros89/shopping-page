import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminHeader from "./AdminHeader";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../../lib/AuthProvider";

test("<AdminHeader /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <UserProvider>
        <AdminHeader />
      </UserProvider>
    </MemoryRouter>,
    div
  );
});
