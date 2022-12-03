import React from "react"
import { render } from "@testing-library/react"
import { CareersHero } from "./CareersHero"

describe("CareersHero", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <CareersHero />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

