import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeForm from "./EmployeeForm";

// Example tests that are complete
describe("EmployeeForm Component", () => {
  // Form submission test example
  it("submits form with correct data", async () => {
    const mockSubmit = jest.fn();

    await act(async () => {
      render(<EmployeeForm onSubmit={mockSubmit} />);
    });

    await act(async () => {
      await userEvent.type(screen.getByLabelText(/name/i), "Jane Doe");
      await userEvent.type(screen.getByLabelText(/position/i), "Manager");
      await userEvent.type(screen.getByLabelText(/department/i), "HR");
      await userEvent.type(screen.getByLabelText(/email/i), "jane@example.com");

      const submitButton = screen.getByText("Add Employee");
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Jane Doe",
          position: "Manager",
          department: "HR",
          email: "jane@example.com",
        })
      );
    });
  });

  // Form reset test example
  it("resets form after submission", async () => {
    await act(async () => {
      render(<EmployeeForm onSubmit={() => { }} />);
    });

    const nameInput = screen.getByLabelText(/name/i);
    const positionInput = screen.getByLabelText(/position/i);
    const departmentInput = screen.getByLabelText(/department/i);
    const emailInput = screen.getByLabelText(/email/i);

    await act(async () => {
      await userEvent.type(nameInput, "Jane Doe");
      await userEvent.type(positionInput, "Manager");
      await userEvent.type(departmentInput, "HR");
      await userEvent.type(emailInput, "jane@example.com");

      const submitButton = screen.getByText("Add Employee");
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(positionInput.value).toBe("");
      expect(departmentInput.value).toBe("");
      expect(emailInput.value).toBe("");
    });
  });
});

describe("Validation Tests", () => {
  /* Exercise 1: Test form validation
     TODO: Write a test that verifies form validation works
     Hint: Try submitting the form without filling required fields */
  it("[Ex4] shows validation errors when submitting empty form", async () => {
    // TODO: 1. Render the component

    await act(async () => {
      render(<EmployeeForm onSubmit={([])} />);
    });

    // TODO: 2. Wait for the component to load
    // TODO: 3. Click the submit button
    const nameInput = screen.getByLabelText(/name/i);
    const positionInput = screen.getByLabelText(/position/i);
    const departmentInput = screen.getByLabelText(/department/i);
    const emailInput = screen.getByLabelText(/email/i);

    const submitButton = screen.getByText("Add Employee");
    await act(async () => {
      fireEvent.click(submitButton);
    });


    await waitFor(() => {
      expect(nameInput.validity.valueMissing).toBe(true);
      expect(positionInput.validity.valueMissing).toBe(true);
      expect(departmentInput.validity.valueMissing).toBe(true);
      expect(emailInput.validity.valueMissing).toBe(true);
    });

    // TODO: 4. Verify that the validation errors are displayed, hint: expect(screen.getByText(/name/i)).toBeInTheDocument();
  });

  /* Exercise 2: Test email format validation
     TODO: Write a test that verifies email format validation
     Hint: Try submitting the form with an invalid email format */
  it("[Ex5] validates email format", async () => {
    //TODO: 1. Render the component
    await act(async () => {
      render(<EmployeeForm onSubmit={([])} />);
    });
    //TODO: 2. Wait for the component to load
    //TODO: 3. Enter an invalid email
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText("Add Employee");



    await act(async () => {
      await userEvent.type(emailInput, "whattttdmk@");
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
        expect(emailInput.validationMessage).toBeTruthy();
    })
    //TODO: 4. Click the submit button
    //TODO: 5. Verify that the validation error is displayed, hint: expect(emailInput.validationMessage).toBeTruthy();// TODO: Implement this test
    /* There is an issue here:
    1. emailInput = test           # validationMessage is not empty
    2. emailInput = test@          # validationMessage is not empty
    3. emailInput = test@test      # validationMessage is     EMPTY # but under the input text "Please enter a valid email address" appears??
    4. emailInput = test@test.     # validationMessage is not empty
    5. emailInput = test@test.ccc  # validationMessage is     EMPTY
    So theoritically 3. is invalid but it is not shown in the "validationMessage" instead in some other form, but I completed the task as per the hint [expect(emailInput.validationMessage).toBeTruthy();]
    */
  });
});
