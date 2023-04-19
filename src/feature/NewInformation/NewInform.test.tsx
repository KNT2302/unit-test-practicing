import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewInformation from "./NewInform";
import { QueryClientContanceProvider } from "@/pages/_app";
import { getPage } from "next-page-tester";

const openForm = () => {
  const newButton = screen.getByRole("button", { name: "New" });

  fireEvent.click(newButton);
};

const submitForm = () => {
  const submit = screen.getByRole("button", { name: "Submit" });
  fireEvent.click(submit);
};

describe("test add new information form", () => {
  beforeEach(() => {
    render(
      <QueryClientContanceProvider>
        <NewInformation />
      </QueryClientContanceProvider>
    );
    openForm();
  });

  it("all fields should require", async () => {
    submitForm();

    const error = await screen.findAllByText("Required");

    expect(error).toHaveLength(3);
  });

  it("should be error if input invalid email", async () => {
    const email = screen.getByRole("textbox", { name: "Email:" });

    fireEvent.change(email, { target: { value: "invalid.email" } });

    submitForm();

    const emailError = await screen.findByText("Invalid email");

    expect(emailError).toBeInTheDocument();
  });

  it("should be error if input short first name", async () => {
    const firstname = screen.getByRole("textbox", { name: "Firstname:" });

    fireEvent.change(firstname, { target: { value: "a" } });

    submitForm();

    const firstnameError = await screen.findByText("Too Short!");

    expect(firstnameError).toBeInTheDocument();
  });
});

describe("should be success to add new information", () => {
  it("create successful", async () => {
    const { page } = await getPage({ route: "/" });
    render(page);

    openForm();

    const email = screen.getByRole("textbox", { name: "Email:" });
    fireEvent.change(email, { target: { value: "def@abc.com" } });

    const firstname = screen.getByRole("textbox", { name: "Firstname:" });
    fireEvent.change(firstname, { target: { value: "Case" } });

    const lastname = screen.getByRole("textbox", { name: "Lastname:" });
    fireEvent.change(lastname, { target: { value: "Mero" } });

    submitForm();

    screen.debug();
  });
});
