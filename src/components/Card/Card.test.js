import React from "react"
import { render } from "@testing-library/react"
import { Card } from "./Card"

describe("Card", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container} = render(
        <Card><div className="test">content</div></Card>
      )
      const testEl = container.getElementsByClassName('test')
      expect(testEl.length).toBe(1)
    })
  })

  describe("when no extraClass prop is passed", () => {
    test("does not have any classes extra classes", () => {
      const { container } = render(
        <Card><div className="test">content</div></Card>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('wrapper')).toBeTruthy()
      expect(elClassList.length).toBe(1)
    })
  })

  describe("when the extraClass prop is passed", () => {
    test("adds the extra class on the wrapper", () => {
      const { container } = render(
        <Card extraClass="extraCustomClass"><div className="test">content</div></Card>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('extraCustomClass')).toBeTruthy()
    })

    test("keeps the original class on the wrapper", () => {
      const { container } = render(
        <Card extraClass="extraCustomClass"><div className="test">content</div></Card>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('wrapper')).toBeTruthy()
    })
  })
})
