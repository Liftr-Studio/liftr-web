import React from "react"
import { render } from "@testing-library/react"
import { ParallaxHero } from "./ParallaxHero"

jest.mock('react-scroll-parallax', () => {
  return {
    __esModule: true,
    useParallax: jest.fn(() => 'mocked baz'),
  };
});

describe("ParallaxHero", () => {
  test("renders without crashing", () => {
    const { container } = render(
      <ParallaxHero>test</ParallaxHero>
    )
    expect(container.getElementsByClassName("wrapper")).toBeTruthy()
  })
})

