import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {});
// render form
render(<CheckoutForm />);
// query for all inputs
const firstName = screen.getByLabelText(/first name/i);
const lastName = screen.getByLabelText(/last name/i);
const address = screen.getByLabelText(/address/i);
const city = screen.getByLabelText(/city/i);
const state = screen.getByLabelText(/state/i);
const zip = screen.getByLabelText(/zip/i);

// type into inputs
userEvent.type(firstName, "Bob");
userEvent.type(lastName, "DaBuilda");
userEvent.type(address, "1234 fake road");
userEvent.type(city, "Bobville");
userEvent.type(state, "Bobadelphia");
userEvent.type(zip, "30307");

// query for the button
const button = screen.getByRole("button", { name: /checkout/i });

// click the button
userEvent.click(button);

// assertions
expect(firstName).toHaveValue("Bob");
expect(lastName).toHaveValue("DaBuilda");
expect(address).toHaveValue("1234 fake road");
expect(city).toHaveValue("Bobville");
expect(state).toHaveValue("Bobadelphia");
expect(zip).toHaveValue("30307");
