import { render, screen } from '@testing-library/react';
import { CardProduct } from '../../../../components/CardProduct/CardProduct'

describe('CardProduct', () => {
    it('should render card with correct values', () => {
        render(
            <CardProduct 
                src='someLink.jpg'
                alt='Arsenal 2020/21' 
                nameProduct='Arsenal 2020/21' 
                price={450} 
            />
        );
        const img = screen.getByAltText('Arsenal 2020/21');
        expect(img.getAttribute('src')).toBe('someLink.jpg');
        expect(img).toBeInTheDocument()
        expect(screen.getByText('Arsenal 2020/21')).toBeInTheDocument();
        expect(screen.getByText('R$ 450.00')).toBeInTheDocument();
    })
})
