import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemUpdate from "./ItemUpdate";
import { MemoryRouter } from 'react-router-dom';

test("<ItemUpdate /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <ItemUpdate />
      </MemoryRouter>,
    div
  );
});
