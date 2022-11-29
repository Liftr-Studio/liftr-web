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

  describe("when the isCenter prop is false", () => {
    test("does not have the isCentered class on it", () => {
      const { container } = render(<Heading theme={1} isCenter={false}>abc</Heading>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isCentered')).toBeFalsy()
    })
  })

  describe("when the isCenter prop is true", () => {
    test("has the isCentered class on it", () => {
      const { container } = render(<Heading theme={1} isCenter>abc</Heading>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isCentered')).toBeTruthy()
    })
  })

  describe("when no extraClass prop is passed", () => {
    test("does not have any classes extra classes", () => {
      const { container } = render(<Heading theme={1}>abc</Heading>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('heading')).toBeTruthy()
      expect(elClassList.length).toBe(2)
    })
  })

  describe("when the extraClass prop is passed", () => {
    test("adds the extra class on the wrapper", () => {
      const { container } = render(<Heading theme={1} extraClass="extraCustomClass">abc</Heading>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('extraCustomClass')).toBeTruthy()
    })

    test("keeps the original class on the wrapper", () => {
      const { container } = render(<Heading theme={1} extraClass="extraCustomClass">abc</Heading>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('heading')).toBeTruthy()
    })
  })

})

