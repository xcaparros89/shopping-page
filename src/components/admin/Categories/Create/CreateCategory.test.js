import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateCategory from "./CreateCategory";
import { MemoryRouter } from 'react-router-dom';

test("<CreateCategory /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <CreateCategory />
      </MemoryRouter>,
    div
  );
});
