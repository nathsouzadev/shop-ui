import { render, screen } from '@testing-library/react';
import Home from '../../../pages';

describe('Home', () => {
  it('should render home page', () => {
    render(<Home />);
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('R$ 450.00')).toBeInTheDocument()
  });
});
