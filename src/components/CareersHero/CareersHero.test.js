import React from "react"
import { render } from "@testing-library/react"
import { CareersHero } from "./CareersHero"

jest.mock('react-scroll-parallax', () => {
  return {
    __esModule: true,
    useParallax: jest.fn(() => 'mocked baz'),
  };
});

describe("CareersHero", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <CareersHero />
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

