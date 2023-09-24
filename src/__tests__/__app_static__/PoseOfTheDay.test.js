import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import PoseOfTheDay from "../../components/app_static/PoseOfTheDay";
import axios from "axios";

jest.mock("axios"); // Mock axios to simulate API calls

describe("PoseOfTheDay", () => {
  it("renders with the correct data", async () => {
    // Mock API response
    const mockData = {
      data: [
        {
          url_png: "mockImageUrl",
          pose_name: "Mock Pose Name",
        },
      ],
    };

    axios.get.mockResolvedValueOnce(mockData);

    render(<PoseOfTheDay />);

    await waitFor(() => {
      expect(screen.getByText("Pose Of The Day")).toBeInTheDocument();
      expect(screen.getByText("Mock Pose Name")).toBeInTheDocument();
      expect(screen.getByAltText("yoga pose of the day")).toBeInTheDocument();
    });
  });
});

it("renders with stored data", async () => {
  // Mock stored data
  localStorage.setItem("lastGeneratedPictureUrl", "cachedImageUrl");
  localStorage.setItem("lastGeneratedName", "Cached Pose Name");

  render(<PoseOfTheDay />);

  await waitFor(() => {
    expect(screen.getByText("Pose Of The Day")).toBeInTheDocument();
    expect(screen.getByText("Cached Pose Name")).toBeInTheDocument();
    expect(screen.getByAltText("yoga pose of the day")).toBeInTheDocument();
  });
});
