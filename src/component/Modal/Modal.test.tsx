import Modal from "@/component/Modal/Modal";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("modal works correctly", () => {
  it("", () => {});
  const openModal = () => {
    const buttonOpen = screen.getByRole("button", { name: "test" });

    fireEvent.click(buttonOpen);
  };

  beforeEach(() => {
    render(
      <Modal modalName="test">
        {(handleClose) => (
          <div>
            <h1>Modal works correctly</h1>
            <button onClick={handleClose}>Close by passed function</button>
          </div>
        )}
      </Modal>
    );
    waitFor(() => {
      openModal();
    });
  });

  it("modal should work", () => {
    const modal = screen.queryByText("Modal works correctly");

    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(closeButton);

    expect(modal).not.toBeInTheDocument();
  });

  it("handlClose should work", () => {
    const modal = screen.queryByText("Modal works correctly");

    const handleCloseButton = screen.getByRole("button", {
      name: "Close by passed function",
    });

    fireEvent.click(handleCloseButton);

    expect(modal).not.toBeInTheDocument();
  });
});
