import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Card1 from "../components/cards/card1/Card1";
import App from "../App"
// import DealHand from "../components/dealHand/DealHand";

jest.setTimeout(50000)

test("checks for my number of aces test are the same for both mobile and desktop view", () => {
  render(<App />);
  const aceElement = screen.getAllByText("4 Aces Left")
  aceElement.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});

test("checks that the number of cards are 52 for both mobile and desktop view", () => {
  render(<App />);
  const aceElement = screen.getAllByText("52")
  aceElement.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});

test("checks that the number of cards are reduced by 5 when button is clicked", async () => {
  render(<App />);
  const buttonElement = await screen.getAllByRole("button", { name: /DEAL/i })
  buttonElement.forEach(element => {
    fireEvent.click(element);
  });
  await new Promise((r) => setTimeout(r, 1000));
  const finds = await screen.findAllByText("47")
  finds.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});

test(" tests for snapshot", () => {
  render(<App />);
  expect(screen.getAllByText("52")).toMatchSnapshot();
  expect(screen.getAllByText("4 Aces Left")).toMatchSnapshot();
});

test("checks that reset button resets the game", async () => {
  render(<App />);
  const buttonElement = await screen.getAllByRole("button", { name: /DEAL/i })
  buttonElement.forEach(element => {
    fireEvent.click(element);
  });
  await new Promise((r) => setTimeout(r, 1000));
  const finds = await screen.findAllByText("47")
  finds.forEach(element => {
    expect(element).toBeInTheDocument();
  });

  const resetElement = await screen.getAllByRole("button", { name: /RESET/i })
  resetElement.forEach(element => {
    fireEvent.click(element);
  });

  const reset = await screen.findAllByText("52")
  reset.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});
//# sourceMappingURL=DealHand.test.jsx.map
