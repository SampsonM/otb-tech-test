import React from "react"
import { render, screen } from "@testing-library/react"
import HolidayRatings from "./HolidayRatings"

describe("HolidayRatings", () => {
	test("should render correct amount of stars for given rating", () => {
		render(<HolidayRatings rating={5} />)

		expect(screen.getAllByTestId('star-rating')).toHaveLength(5)
	})

	test("should render no stars for 0 rating", () => {
		render(<HolidayRatings rating={0} />)

		expect(screen.queryAllByTestId('star-rating')).toHaveLength(0)
	})
})