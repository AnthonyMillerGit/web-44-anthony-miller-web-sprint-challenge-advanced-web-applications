import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
    render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
    render(<BubblePage />)
    const colors = screen.getByText(/colors/i)
    expect(colors).toBeInTheDocument()
});