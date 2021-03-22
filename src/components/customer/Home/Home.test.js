import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { MemoryRouter } from 'react-router-dom';

test("<Home /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <Home />
      </MemoryRouter>,
    div
  );
});
