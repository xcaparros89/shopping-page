import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryInfo from "./CategoryInfo";
import { MemoryRouter } from 'react-router-dom';

test("<CategoryInfo /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <CategoryInfo />
      </MemoryRouter>,
    div
  );
});
