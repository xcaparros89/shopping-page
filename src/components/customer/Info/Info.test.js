import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Info from "./Info";
import { MemoryRouter } from 'react-router-dom';

test("<Info /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <Info />
      </MemoryRouter>,
    div
  );
});
