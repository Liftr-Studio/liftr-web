import React from "react"
import { render } from "@testing-library/react"
import { PageContainer } from "./PageContainer"

describe("PageContainer", () => {
  describe("when a children prop is passed", () => {
    test("renders the children prop as content", () => {
      const { container} = render(
        <PageContainer><div className="test">content</div></PageContainer>
      )
      const testEl = container.getElementsByClassName('test')
      expect(testEl.length).toBe(1)
    })
  })

  describe("when no padding prop is passed", () => {
    test("has the default hasPadding class", () => {
      const { container } = render(
        <PageContainer><div className="test">content</div></PageContainer>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('hasPadding')).toBeTruthy()
      expect(elClassList.length).toBe(2)
    })
  })

  describe("when the padding prop is passed", () => {
    describe("and the value is false", () => {
      test("does not have any classes related to padding", () => {
        const { container } = render(
          <PageContainer padding={false}><div className="test">content</div></PageContainer>
        )

        const elClassList = container.firstChild.classList

        expect(elClassList.contains('pageContainer')).toBeTruthy()
        expect(elClassList.length).toBe(1)
      })
    })

    describe("and the value is true", () => {
      test("adds a hasPadding class", () => {
        const { container } = render(
          <PageContainer padding><div className="test">content</div></PageContainer>
        )

        const elClassList = container.firstChild.classList

        expect(elClassList.contains('hasPadding')).toBeTruthy()
      })

      test("does not have any other classes", () => {
        const { container } = render(
          <PageContainer padding><div className="test">content</div></PageContainer>
        )

        const elClassList = container.firstChild.classList

        expect(elClassList.length).toBe(2)
      })
    })

    describe("and the value is onlyLargeScreens", () => {
      test("adds a hasOnlyLargeScreensPadding class", () => {
        const { container } = render(
          <PageContainer padding="onlyLargeScreens"><div className="test">content</div></PageContainer>
        )

        const elClassList = container.firstChild.classList

        expect(elClassList.contains('hasOnlyLargeScreensPadding')).toBeTruthy()
      })

      test("does not have any other classes", () => {
        const { container } = render(
          <PageContainer padding><div className="test">content</div></PageContainer>
        )

        const elClassList = container.firstChild.classList

        expect(elClassList.length).toBe(2)
      })
    })
  })

  describe("when no extraClass prop is passed", () => {
    test("does not have any classes extra classes", () => {
      const { container } = render(
        <PageContainer><div className="test">content</div></PageContainer>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('pageContainer')).toBeTruthy()
      expect(elClassList.length).toBe(2)
    })
  })

  describe("when the extraClass prop is passed", () => {
    test("adds the extra class on the wrapper", () => {
      const { container } = render(
        <PageContainer extraClass="extraCustomClass"><div className="test">content</div></PageContainer>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('extraCustomClass')).toBeTruthy()
    })

    test("keeps the original class on the wrapper", () => {
      const { container } = render(
        <PageContainer extraClass="extraCustomClass"><div className="test">content</div></PageContainer>
      )

      const elClassList = container.firstChild.classList

      expect(elClassList.contains('pageContainer')).toBeTruthy()
    })
  })
})
