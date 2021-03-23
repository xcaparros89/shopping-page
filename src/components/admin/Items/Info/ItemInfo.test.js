import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemInfo from "./ItemInfo";
import { MemoryRouter } from 'react-router-dom';

test("<ItemInfo /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <ItemInfo />
      </MemoryRouter>,
    div
  );
});
