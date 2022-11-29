import React from "react"
import { render } from "@testing-library/react"
import { Media } from "./Media"
import image from "../../images/liftr-logo-dark.svg"

describe("Media", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container } = render(<Media image={image}>abc</Media>)

      expect(container.textContent).toBe("abc")
    })
  })

  describe("when the image prop is passed", () => {
    test("adds the image source to the img tag", () => {
      const { container } = render(<Media image={image}>abc</Media>)

      expect(container.querySelector("img").getAttribute("src")).toBe(image)
    })
  })

  describe("when the flip prop is false", () => {
    test("does not have the isFlipped class on it", () => {
      const { container } = render(<Media image={image} flip={false}>abc</Media>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isFlipped')).toBeFalsy()
    })
  })

  describe("when the flip prop is true", () => {
    test("has the isFlipped class on it", () => {
      const { container } = render(<Media image={image} flip>abc</Media>)

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isFlipped')).toBeTruthy()
    })
  })

  // describe("when no importance is passed", () => {
  //   test("renders an h1", () => {
  //     const { container } = render(<Media theme={1}>abc</Media>)

  //     expect(container.firstChild.tagName).toBe("H1")
  //   })
  // })

  // describe("when the importance prop is passed", () => {
  //   test("renders the respective Media tag", () => {
  //     for (let i = 1; i <= 6; i++) {
  //       const { container } = render(<Media theme={1} importance={i}>abc</Media>)

  //       expect(container.firstChild.tagName).toBe(`H${i}`)
  //     }
  //   })
  // })

  // describe("when the theme prop is passed", () => {
  //   test("adds the corresponding class on the element", () => {
  //     const { container } = render(<Media theme={1}>abc</Media>)

  //     expect(container.firstChild.classList.contains("theme1")).toBeTruthy()
  //   })
  // })

  // describe("when the isCenter prop is false", () => {
  //   test("does not have the isCentered class on it", () => {
  //     const { container } = render(<Media theme={1} isCenter={false}>abc</Media>)

  //     const elClassList = container.firstChild.classList

  //     expect(elClassList.contains('isCentered')).toBeFalsy()
  //   })
  // })

  // describe("when the isCenter prop is true", () => {
  //   test("has the isCentered class on it", () => {
  //     const { container } = render(<Media theme={1} isCenter>abc</Media>)

  //     const elClassList = container.firstChild.classList

  //     expect(elClassList.contains('isCentered')).toBeTruthy()
  //   })
  // })
})

