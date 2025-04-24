import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest'; 
import DivideOperation  from '../../normalCalAtoms/divideOperation';
import "@testing-library/jest-dom";


describe('DivideOperation Component', () => {
  it('calls onOperation with "/" when clicked', () => {
    const onOperationMock = vi.fn();

    render(<DivideOperation onOperation={onOperationMock} />);

    const button = screen.getByText('/');
    fireEvent.click(button);

    expect(onOperationMock).toHaveBeenCalledWith('/');
  });
});
