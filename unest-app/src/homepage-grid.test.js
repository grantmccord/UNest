import React from "react"
import {render, fireEvent, screen } from "@testing-library/react"
import { Properties } from "./components/Properties"
import { Property } from "./components/Property"
import '@testing-library/jest-dom'

test("renders property grid correctly", () => {
    render(<Properties/>)
    const propertyGrid = screen.queryByTestId("propertyGrid")
    expect(propertyGrid).toBeTruthy()
});

test ("renders correct number of properties", () => {
    render(<Properties/>);
    const listItems = screen.getAllByRole("item")
    expect(listItems.length).toEqual(4)
});