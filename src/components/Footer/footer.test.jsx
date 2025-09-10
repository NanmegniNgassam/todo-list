import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from './index'

describe('Should Footer component work perfectly', () => {
  it('Should the component be wrapped by a footer tag', () => {
    render(<Footer />)
  })
})