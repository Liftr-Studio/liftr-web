import React from "react"
import { render } from "@testing-library/react"
import { HomepageHero } from "./HomepageHero"

describe("HomepageHero", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <HomepageHero />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

