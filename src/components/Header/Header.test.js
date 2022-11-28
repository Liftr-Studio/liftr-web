import React from "react"
import { render } from "@testing-library/react"
import { Header } from "./Header"

describe("Header", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <Header />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })

  describe("when no theme value is passed", () => {
    test("renders without any classes on the header", () => {
      const { container } = render(
        <Header />
      )

      expect(container.firstChild.classList.length).toBe(0)
    })
  })

  describe("when the dark theme is passed", () => {
    test("renders with the dark theme class on the header", () => {
      const { container } = render(
        <Header theme="dark" />
      )

      expect(container.firstChild.classList.contains("themeDark")).toBeTruthy()
    })
  })

  describe("when no overlap prop is passed", () => {
    test("renders without any classes on the header", () => {
      const { container } = render(
        <Header />
      )

      expect(container.firstChild.classList.length).toBe(0)
    })
  })

  describe("when the overlap prop is passed", () => {
    describe("and the value is false", () => {
      test("renders without any classes on the header", () => {
        const { container } = render(
          <Header overlap={false} />
        )

        expect(container.firstChild.classList.length).toBe(0)
      })
    })

    describe("and the value is true", () => {
      test("renders with the overlap class on the header", () => {
        const { container } = render(
          <Header overlap />
        )

        expect(container.firstChild.classList.contains("isOverlapping")).toBeTruthy()
      })
    })
  })
})

