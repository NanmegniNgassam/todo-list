import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Header from ".";

describe('Should Header component work perfectly', () => {
  const title = 'Todo-ist';

  beforeEach(() => {
    render(<Header />)
  })

  it('Should the component be wrapped by a header tag', () => {
    const headerWrapper = screen.getByTestId('headerWrapper');

    expect(headerWrapper).toBeInTheDocument();
    expect(headerWrapper.tagName).toBe('HEADER')
  })

  it(`Should the app title be ${title}`, () => {
    const titleWrapper = screen.getByText(title);

    expect(titleWrapper).toBeInTheDocument();
    expect(titleWrapper.tagName).toBe('SPAN');
  })
})