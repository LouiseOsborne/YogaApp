import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import PosesLibrary from "../../components/app_static/PosesLibrary";

describe("PosesLibrary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PosesLibrary />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
