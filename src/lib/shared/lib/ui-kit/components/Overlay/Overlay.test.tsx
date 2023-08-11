import { render } from '@testing-library/react';
import { Overlay } from './Overlay';

describe('Overlay', () => {
  const mockFn = jest.fn();
  it('should render successfully', () => {
    const { container } = render(<Overlay isActive={false} close={mockFn} />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
  it('active', () => {
    const { container } = render(<Overlay isActive={true} close={mockFn} />);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
