import React from "react";

import { render, screen } from "@testing-library/react";

import About from "@/app/about/page";

describe("Test About Page", () => {
  test("About Page, check if the heading is in the document", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 1, name: /Soft & Sweet/i });
    expect(heading).toBeInTheDocument();
  });
});
