import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateItem from "./CreateItem";
import { MemoryRouter } from 'react-router-dom';

test("<CreateItem /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <CreateItem />
      </MemoryRouter>,
    div
  );
});
