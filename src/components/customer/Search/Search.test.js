import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./Search";
import { MemoryRouter } from 'react-router-dom';

test("<Search /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <Search />
      </MemoryRouter>,
    div
  );
});
