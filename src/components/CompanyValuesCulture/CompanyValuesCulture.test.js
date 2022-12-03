import React from "react"
import { render } from "@testing-library/react"
import { CompanyValuesCulture } from "./CompanyValuesCulture"

describe("CompanyValuesCulture", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <CompanyValuesCulture />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

