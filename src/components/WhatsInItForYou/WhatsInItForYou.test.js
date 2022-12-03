import React from "react"
import { render } from "@testing-library/react"
import { WhatsInItForYou } from "./WhatsInItForYou"

describe("WhatsInItForYou", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <WhatsInItForYou />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

