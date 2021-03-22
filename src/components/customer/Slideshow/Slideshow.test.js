import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Slideshow from "./Slideshow";
import { MemoryRouter } from 'react-router-dom';

test("<Slideshow /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <Slideshow />
      </MemoryRouter>,
    div
  );
});
