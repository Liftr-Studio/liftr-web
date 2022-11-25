import React from "react"
import { render } from "@testing-library/react"
import { Layout } from "./Layout"

test("Renders the children prop as content", () => {
  const { container} = render(
    <Layout><div className="test">content</div></Layout>
  )
  const testEl = container.getElementsByClassName('test')
  expect(testEl.length).toBe(1)
})
