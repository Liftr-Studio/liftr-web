import React from "react"
import { render } from "@testing-library/react"
import PrivacyPolicy from "./privacy-policy"

test("Renders the privacy policy inside the layout", () => {
  const { container} = render(<PrivacyPolicy />)

  const testEl = container.getElementsByClassName("liftr")
  expect(testEl.length).toBe(1)
})
