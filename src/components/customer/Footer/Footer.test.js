import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { MemoryRouter } from 'react-router-dom';

test("<Footer /> renders without crashing", () => {
  const div = document.createElement("div");
  render(
      <MemoryRouter>
    <Footer />
      </MemoryRouter>,
    div
  );
});
