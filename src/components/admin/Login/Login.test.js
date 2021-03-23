import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from "../../../lib/AuthProvider";

test("<Login /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
      <UserProvider>
    <Login />
      </UserProvider>
      </MemoryRouter>,
    div
  );
});
