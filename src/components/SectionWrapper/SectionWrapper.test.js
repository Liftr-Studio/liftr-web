import React from "react"
import { render } from "@testing-library/react"
import { SectionWrapper } from "./SectionWrapper"

describe("SectionWrapper", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container} = render(
        <SectionWrapper><div className="test">content</div></SectionWrapper>
      )
      const testEl = container.getElementsByClassName('test')
      expect(testEl.length).toBe(1)
    })
  })

  describe("when no extraClass prop is passed", () => {
    test("does not have any classes extra classes", () => {
      const { container } = render(
        <SectionWrapper><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('wrapper')).toBeTruthy()
      expect(elClassList.length).toBe(1)
    })
  })

  describe("when the extraClass prop is passed", () => {
    test("adds the extra class on the wrapper", () => {
      const { container } = render(
        <SectionWrapper extraClass="extraCustomClass"><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('extraCustomClass')).toBeTruthy()
    })

    test("keeps the original class on the wrapper", () => {
      const { container } = render(
        <SectionWrapper extraClass="extraCustomClass"><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('wrapper')).toBeTruthy()
    })
  })

  describe("when the isCenter prop is false", () => {
    test("does not have the isCentered class on it", () => {
      const { container } = render(
        <SectionWrapper isCenter={false}><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isCentered')).toBeFalsy()
    })
  })

  describe("when the isCenter prop is true", () => {
    test("has the isCentered class on it", () => {
      const { container } = render(
        <SectionWrapper isCenter><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('isCentered')).toBeTruthy()
    })
  })

  describe("when the hasAlternativeFont prop is false", () => {
    test("does not have the alternativeFont class on it", () => {
      const { container } = render(
        <SectionWrapper alternativeFont={false}><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('alternativeFont')).toBeFalsy()
    })
  })

  describe("when the hasAlternativeFont prop is true", () => {
    test("has the alternativeFont class on it", () => {
      const { container } = render(
        <SectionWrapper hasAlternativeFont><div className="test">content</div></SectionWrapper>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('alternativeFont')).toBeTruthy()
    })
  })

})
