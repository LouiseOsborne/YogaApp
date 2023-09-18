import React from "react";
import { render } from "@testing-library/react";
import PoseOfTheDay from "../../components/app_static/PoseOfTheDay";

describe("PoseOfTheDay", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PoseOfTheDay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
