import { render, screen, fireEvent } from '@testing-library/react';
// import Card1 from '../components/cards/card1/Card1';
import App from '../App'
// import DealHand from '../components/dealHand/DealHand';


test('checks for my number of aces test are the same for both mobile and desktop view', () => {
  render(<App />);
    const aceElement = screen.getAllByText('4 Aces Left')
    aceElement.forEach(element => {
      expect(element).toBeInTheDocument();
    });
});

test('checks that the number of cards are 52 for both mobile and desktop view', () => {
  render(<App />);
    const aceElement = screen.getAllByText('52')
    aceElement.forEach(element => {
      expect(element).toBeInTheDocument();
    });
});

test('checks that the number of cards are reduced by 5 when button is clicked', async () => {
  render(<App />);
  const buttonElement = await screen.getAllByRole("button", { name: /DEAL/i })
  buttonElement.forEach(element => {
    fireEvent.click(element);
  });
    await new Promise((r) => setTimeout(r, 1500));
    const finds = await screen.findAllByText('47')
    finds.forEach(element => {
      expect(element).toBeInTheDocument();
    });    
});

test('checks that the number of ace are reduced by 1 when button is clicked', async () => {
  render(<App />);
  const buttonElement = await screen.getAllByRole("button", { name: /DEAL/i })
  buttonElement.forEach(element => {
    fireEvent.click(element);
  });
    await new Promise((r) => setTimeout(r, 1500));
    const finds = await screen.findAllByText('3 Aces Left')
    finds.forEach(element => {
      expect(element).toBeInTheDocument();
    });
});
//# sourceMappingURL=DealHand.test.jsx.map
