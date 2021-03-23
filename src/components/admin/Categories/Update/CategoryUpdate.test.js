import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryUpdate from "./CategoryUpdate";
import { MemoryRouter } from 'react-router-dom';

test("<CategoryUpdate /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <CategoryUpdate />
      </MemoryRouter>,
    div
  );
});
