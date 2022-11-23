import React from "react"
import renderer from "react-test-renderer"

import NotFoundPage from "./404"

describe("NotFoundPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NotFoundPage siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
