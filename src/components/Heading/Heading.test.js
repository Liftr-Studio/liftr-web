import React from "react"
import { render } from "@testing-library/react"
import { Heading } from "./Heading"

describe("Heading", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container } = render(<Heading theme={1}>abc</Heading>)

      expect(container.textContent).toBe("abc")
    })
  })

  describe("when no importance is passed", () => {
    test("renders an h1", () => {
      const { container } = render(<Heading theme={1}>abc</Heading>)

      expect(container.firstChild.tagName).toBe("H1")
    })
  })

  describe("when the importance prop is passed", () => {
    test("renders the respective heading tag", () => {
      for (let i = 1; i <= 6; i++) {
        const { container } = render(<Heading theme={1} importance={i}>abc</Heading>)

        expect(container.firstChild.tagName).toBe(`H${i}`)
      }
    })
  })

  describe("when the theme prop is passed", () => {
    test("adds the corresponding class on the element", () => {
      const { container } = render(<Heading theme={1}>abc</Heading>)

      expect(container.firstChild.classList.contains("theme1")).toBeTruthy()
    })
  })
})

