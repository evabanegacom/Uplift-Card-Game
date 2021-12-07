import { render, screen } from '@testing-library/react';
import DealHand from '../components/dealHand/DealHand';
test('checks for my card element', () => {
    render(<DealHand />);
    // write tests for the DealHand component
    const myCard = screen.getByTestId('my-card');
    
    
});
//# sourceMappingURL=DealHand.test.jsx.map
