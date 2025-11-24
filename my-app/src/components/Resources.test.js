import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from './Resources';

describe('Resources Component', () => {
  test('displays website domain names in resource links', () => {
    render(<Resources />);
    
    // Check that domain names are displayed in the links
    expect(screen.getByText(/Visit website \(swaca\.com\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Visit website \(rasamerseyside\.org\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Visit website \(samaritans\.org\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Visit website \(listening-ear\.co\.uk\)/i)).toBeInTheDocument();
  });

  test('extracts domain names correctly without www prefix', () => {
    render(<Resources />);
    
    // Check that www. is removed from domain names
    expect(screen.getByText(/Visit website \(mind\.org\.uk\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Visit website \(alcoholics-anonymous\.org\.uk\)/i)).toBeInTheDocument();
  });

  test('renders all resource links as clickable anchors', () => {
    render(<Resources />);
    
    // Get all links that contain "Visit website"
    const visitLinks = screen.getAllByText(/Visit website \(/i);
    
    // Verify there are multiple resource links rendered
    expect(visitLinks.length).toBeGreaterThan(0);
    
    // Verify each link is an anchor element
    visitLinks.forEach(link => {
      expect(link.tagName).toBe('A');
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('does not display empty parentheses for any resource', () => {
    render(<Resources />);
    
    // Ensure no link contains "Visit website () →" which would indicate a failed domain extraction
    const allLinks = screen.queryByText(/Visit website \(\) →/i);
    expect(allLinks).not.toBeInTheDocument();
  });
});
