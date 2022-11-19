import { mockResults } from "@/constants/mockData"
import { colours } from "@/constants/styles"
import { render, screen } from "@testing-library/react"
import React from "react"
import HolidayResultSorter from "./HolidayResultSorter"

describe("HolidayResultSorter", () => {
	test("renders with correct default set as active", () => {
		render(<HolidayResultSorter setHolidayResults={() => { }} holidayResults={mockResults} />)

		const alphabeticButton = screen.getByRole('button', { name: /alphabetically/i })
		const priceButton = screen.getByRole('button', { name: /price/i })
		const ratingButton = screen.getByRole('button', { name: /star rating/i })

		expect(alphabeticButton).toHaveStyle(`background-color: ${colours.primaryBlue}`)
		expect(alphabeticButton).toHaveStyle(`color: ${colours.primaryWhite}`)
		expect(priceButton).toHaveStyle(`background-color: ${colours.primaryWhite}`)
		expect(priceButton).toHaveStyle(`color: ${colours.primaryBlue}`)
		expect(ratingButton).toHaveStyle(`background-color: ${colours.primaryWhite}`)
		expect(ratingButton).toHaveStyle(`color: ${colours.primaryBlue}`)
	})
})
