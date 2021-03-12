import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // arrange - render header
  render(<CheckoutForm />);
  // act - access the header
  const header = screen.queryByText(/checkout form/i);
  // assert - expect header to be in the document
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  // ARRANGE -
  render(<CheckoutForm />);

  // ACT:
  // // find all inputs:
  // const firstName = screen.findByLabelText(/firstName:/i);
  const lastName = screen.getByLabelText(/last name:/i);
  const address = screen.getByLabelText(/address:/i);
  const city = screen.getByLabelText(/city:/i);
  const state = screen.getByLabelText(/state:/i);
  const zip = screen.getByLabelText(/zip:/i);

  // enter values into inputs:
  // userEvent.type(firstName, "Ralph");
  userEvent.type(lastName, "Ralpherson");
  userEvent.type(address, "1234 Ralph Way");
  userEvent.type(city, "Ralphville");
  userEvent.type(state, "GA");
  userEvent.type(zip, "12345");

  // click the button:
  const button = screen.queryByRole(/button/i, { name: /checkout/i });
  userEvent.click(button);

  // ASSERT -
  // expect(firstName).toHaveValue("Ralph");
  expect(lastName).toHaveValue("Ralpherson");
  expect(address).toHaveValue("1234 Ralph Way");
  expect(city).toHaveValue("Ralphville");
  expect(state).toHaveValue("GA");
  expect(zip).toHaveValue("12345");
});
