import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Footer from './index'

describe('Should Footer component work perfectly', () => {
  beforeEach(() => {
    render(<Footer />);
  })

  it('Should the component be wrapped by a footer tag', () => {
    const footerWrapper = screen.getByTestId('footer');

    expect(footerWrapper).toBeInTheDocument();
    expect(footerWrapper.tagName).toBe('FOOTER');
  })

  it('Should the copyrights be filled with the current year', () => {
    const currentYear = new Date().getFullYear();
    const regex = new RegExp(`${currentYear}`);

    expect(screen.getByText(regex)).toBeInTheDocument();
  })

  it('Should the copyrights mention the developer', () => {
    const developerName = 'Gilles NGASSAM';
    const referalLink: HTMLLinkElement = screen.getByText(developerName);

    expect(referalLink).toBeInTheDocument();
    expect(referalLink.href).toBe('https://gilles-ngassam.pisoftlite.com/');
    expect(referalLink.tagName).toBe('A');
  })
})