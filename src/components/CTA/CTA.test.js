import React from "react"
import { render } from "@testing-library/react"
import { CTA } from "./CTA"

describe("CTA", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container} = render(
        <CTA to="/test">Click Me!</CTA>
      )
      expect(container.textContent).toBe("Click Me!")
    })
  })

  describe("when a to prop is passed", () => {
    test("adds it as an href to the anchor", () => {
      const { container} = render(
        <CTA to="/test">Click Me!</CTA>
      )
      expect(container.firstChild.getAttribute("href")).toBe("/test")
    })
  })

  describe("when importance is not passed", () => {
    test("has the default primary importance", () => {
      const { container} = render(
        <CTA to="/test">Click Me!</CTA>
      )
      expect(container.firstChild.classList.contains("ctaPrimary")).toBeTruthy()
    })
  })

  describe("when importance is passed", () => {
    describe("and the value is primary", () => {
      test("has the primary importance class", () => {
        const { container} = render(
          <CTA to="/test" importance="primary">Click Me!</CTA>
        )
        expect(container.firstChild.classList.contains("ctaPrimary")).toBeTruthy()
      })
    })

    describe("and the value is secondary", () => {
      test("has the secondary importance class", () => {
        const { container} = render(
          <CTA to="/test" importance="secondary">Click Me!</CTA>
        )
        expect(container.firstChild.classList.contains("ctaSecondary")).toBeTruthy()
      })
    })
  })

  describe("when hasArrowIcon is not passed", () => {
    test("does not render the arrow icon", () => {
      const { container } = render(
        <CTA to="/test">Click Me!</CTA>
      )

      const icon = container.getElementsByClassName("iconWrapper")
      expect(icon.length).toBe(0)
    })
  })


  describe("when hasArrowIcon is passed as false", () => {
    test("does not render the arrow icon", () => {
      const { container } = render(
        <CTA to="/test" hasArrowIcon={false}>Click Me!</CTA>
      )

      const icon = container.getElementsByClassName("iconWrapper")
      expect(icon.length).toBe(0)
    })
  })

  describe("when hasArrowIcon is passed as true", () => {
    test("renders the arrow icon", () => {
      const { container } = render(
        <CTA to="/test" hasArrowIcon>Click Me!</CTA>
      )

      const icon = container.getElementsByClassName("iconWrapper")
      expect(icon.length).toBe(1)
    })
  })
})

