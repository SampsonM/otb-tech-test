import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import HolidayCardDescription from "./HolidayCardDescription"

describe("HolidayCardDescription", () => {
	test("when read more or less button toggled description is shown and hidden", () => {
		render(<HolidayCardDescription description="Fake description" />)

		let description = screen.queryByText('Fake description')
		
		expect(description).not.toBeInTheDocument()

		const readMoreButton = screen.getByRole('button', { name: /read more/i })
		fireEvent.click(readMoreButton)
		
		description = screen.getByText('Fake description')

		expect(description).toBeInTheDocument()

		const readLessButton = screen.getByRole('button', { name: /read less/i })
		fireEvent.click(readLessButton)

		description = screen.queryByText('Fake description')

		expect(description).not.toBeInTheDocument()
	})
})
