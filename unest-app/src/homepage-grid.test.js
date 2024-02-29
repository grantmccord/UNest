import React from "react"
import {render, fireEvent, screen } from "@testing-library/react"
import { Properties } from "./components/Properties"
import { Property } from "./components/Property"
import '@testing-library/jest-dom'

it("renders correctly", () => {
    // const {queryByTestId} = render(<Properties/>)
    // console.log("renders correctly")
    // expect(queryByTestId("property")).toBeTruthy()
    render(<Properties/>)
    console.log("renders correctly")
    // const names = screen.getByText(/2 Bed Room at Granite/i);
    // expect(names).toBeInTheDocument();
    expect(screen.getByText(/2 Bed Room at Granite/i)).toBeInTheDocument()
});