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

test ("renders correct number of names", () => {
    render(<Properties/>);
    const listNames = screen.getAllByRole("name")
    expect(listNames.length).toEqual(4)
});

test ("renders correct number of prices", () => {
    render(<Properties/>);
    const listItems = screen.getAllByRole("price")
    expect(listItems.length).toEqual(4)
});

test ("renders correct number of dates", () => {
    render(<Properties/>);
    const listDates = screen.getAllByRole("date")
    expect(listDates.length).toEqual(4)
});

test ("renders correct number of milesFromCampus", () => {
    render(<Properties/>);
    const listMilesFromCampus = screen.getAllByRole("milesFromCampus")
    expect(listMilesFromCampus.length).toEqual(4)
});

test ("name field is not null", () => {
    render(<Property/>);
    expect(screen.getByRole("name")).not.toBeEmptyDOMElement()
});

test ("price field is not null", () => {
    render(<Property/>);
    expect(screen.getByRole("price")).not.toBeEmptyDOMElement()
});

test ("date field is not null", () => {
    render(<Property/>);
    expect(screen.getByRole("date")).not.toBeEmptyDOMElement()
});

test ("milesFromCampus field is not null", () => {
    render(<Property/>);
    expect(screen.getByRole("milesFromCampus")).not.toBeEmptyDOMElement()
});