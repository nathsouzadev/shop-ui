import { render, screen } from '@testing-library/react';
import { Header } from '../../../../components/Header/Header'

describe('Header', () => {
    it('should show header', () => {
        render(<Header />);
        expect(screen.getByText('Shop')).toBeInTheDocument();
    })
})
