import { render, screen } from '@testing-library/react';
import Landing from '../Landing';

describe('Sample page tests', () => {
  it('should render a h1', () => {
    render(<Landing />);
    expect(screen.getByRole('heading', { name: 'Creating a react app' })).toBeInTheDocument();
  });
});
