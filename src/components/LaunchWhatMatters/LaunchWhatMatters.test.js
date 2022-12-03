import React from "react"
import { render } from "@testing-library/react"
import { LaunchWhatMatters } from "./LaunchWhatMatters"

describe("LaunchWhatMatters", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <LaunchWhatMatters />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

