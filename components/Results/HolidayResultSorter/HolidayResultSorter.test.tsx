import { mockResults } from "@/constants/mockData"
import { colours } from "@/constants/styles"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import HolidayResultSorter from "./HolidayResultSorter"

describe("HolidayResultSorter", () => {
	test("renders buttons as inactive with no sort set", () => {
		const mockSetHolidayResults = jest.fn()
		render(<HolidayResultSorter defaultSortMethod="ALPHABETIC" setHolidayResults={mockSetHolidayResults} holidayResults={mockResults} />)

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

	test("should sort based on default sort method prop", () => {
		const mockSetHolidayResults = jest.fn()
		render(<HolidayResultSorter
			defaultSortMethod="ALPHABETIC"
			setHolidayResults={mockSetHolidayResults}
			holidayResults={[
				// @ts-expect-error testing basic input
				{ hotelName: "z" }, { hotelName: "g" }, { hotelName: "A" }, { hotelName: "K" }
			]}
		/>)

		expect(mockSetHolidayResults).toHaveBeenCalledWith(expect.objectContaining([
			{ hotelName: "A" }, { hotelName: "g" }, { hotelName: "K" }, { hotelName: "z" }
		]))

		// Called only once on render
		expect(mockSetHolidayResults).toHaveBeenCalledTimes(1)
	})

	describe("when sort alphabetically clicked", () => {
		test("should sort holidays alphabetically when alphabetic sort NOT active and NOT sort when active", () => {
			const mockSetHolidayResults = jest.fn()
			
			render(<HolidayResultSorter
				defaultSortMethod="PRICE"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ hotelName: "z", totalPrice: "123.00" }, { hotelName: "g", totalPrice: "123.00" }, { hotelName: "A", totalPrice: "123.00" }, { hotelName: "K", totalPrice: "123.00" }
				]}
			/>)
	
			const alphabeticButton = screen.getByRole('button', { name: /alphabetically/i })
			fireEvent.click(alphabeticButton)
			
			expect(mockSetHolidayResults).toHaveBeenCalledWith(expect.objectContaining([
				{ hotelName: "A", totalPrice: "123.00" }, { hotelName: "g", totalPrice: "123.00" }, { hotelName: "K", totalPrice: "123.00" }, { hotelName: "z", totalPrice: "123.00" }
			]))
			
			fireEvent.click(alphabeticButton)
			
			// Called once on render to sort holiday results second time on alphabetic sort click
			expect(mockSetHolidayResults).toHaveBeenCalledTimes(2)
		})
	
		test("should render correct alphabetic sort button styles", () => {
			const mockSetHolidayResults = jest.fn()
			
			render(<HolidayResultSorter
				defaultSortMethod="PRICE"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ hotelName: "z" }, { hotelName: "g" }, { hotelName: "A" }, { hotelName: "K" }
				]}
			/>)
	
			const alphabeticButton = screen.getByRole('button', { name: /alphabetically/i })
			fireEvent.click(alphabeticButton)
	
			expect(alphabeticButton).toHaveStyle(`background-color: ${colours.primaryBlue}`)
			expect(alphabeticButton).toHaveStyle(`color: ${colours.primaryWhite}`)
		})
	})

	describe("when sort by price is clicked", () => {
		test("should sort holidays price when price sort NOT active and NOT sort when active", () => {
			const mockSetHolidayResults = jest.fn()
			
			render(<HolidayResultSorter
				defaultSortMethod="ALPHABETIC"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ totalPrice: "696.80", hotelName: "z" }, { totalPrice: "1169.00", hotelName: "X" }, { totalPrice: "123456.00", hotelName: "W" }, { totalPrice: "00.00", hotelName: "a" }
				]}
			/>)
	
			const priceButton = screen.getByRole('button', { name: /price/i })
			fireEvent.click(priceButton)
			
			expect(mockSetHolidayResults).toHaveBeenCalledWith(expect.objectContaining([
				{ hotelName: "a", totalPrice: "00.00" }, { hotelName: "z", totalPrice: "696.80" }, { hotelName: "X", totalPrice: "1169.00" }, { hotelName: "W", totalPrice: "123456.00" }
			]))
			
			fireEvent.click(priceButton)
			
			// Called once on render to sort holiday results second time on alphabetic sort click
			expect(mockSetHolidayResults).toHaveBeenCalledTimes(2)
		})

		test("should render correct sort price button styles", () => {
			const mockSetHolidayResults = jest.fn()

			render(<HolidayResultSorter
				defaultSortMethod="ALPHABETIC"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ hotelName: "z" }, { hotelName: "g" }, { hotelName: "A" }, { hotelName: "K" }
				]}
			/>)

			const priceButton = screen.getByRole('button', { name: /price/i })
			fireEvent.click(priceButton)

			expect(priceButton).toHaveStyle(`background-color: ${colours.primaryBlue}`)
			expect(priceButton).toHaveStyle(`color: ${colours.primaryWhite}`)
		})
	})

	describe("when sort by rating is clicked", () => {
		test("should sort holidays rating when rating sort NOT active and NOT sort when active", () => {
			const mockSetHolidayResults = jest.fn()
			
			render(<HolidayResultSorter
				defaultSortMethod="ALPHABETIC"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ rating: 5, hotelName: "A" }, { rating: 1, hotelName: "B" }, { rating: 2, hotelName: "E" }, { rating: 5, hotelName: "D" }, { rating: 3, hotelName: "K" }, { rating: 4, hotelName: "A" },
				]}
			/>)
	
			const ratingButton = screen.getByRole('button', { name: /star rating/i })
			fireEvent.click(ratingButton)
			
			expect(mockSetHolidayResults).toHaveBeenCalledWith(expect.objectContaining([
				{ hotelName: "A", rating: 5 }, { hotelName: "D", rating: 5 }, { hotelName: "A", rating: 4 }, { hotelName: "K", rating: 3 }, { hotelName: "E", rating: 2 }, { hotelName: "B", rating: 1 }
			]))
			
			fireEvent.click(ratingButton)
			
			// Called once on render to sort holiday results second time on alphabetic sort click
			expect(mockSetHolidayResults).toHaveBeenCalledTimes(2)
		})

		test("should render correct sort price button styles", () => {
			const mockSetHolidayResults = jest.fn()

			render(<HolidayResultSorter
				defaultSortMethod="ALPHABETIC"
				setHolidayResults={mockSetHolidayResults}
				holidayResults={[
					// @ts-expect-error testing basic input
					{ hotelName: "z" }, { hotelName: "g" }, { hotelName: "A" }, { hotelName: "K" }
				]}
			/>)

			const ratingButton = screen.getByRole('button', { name: /star rating/i })
			fireEvent.click(ratingButton)

			expect(ratingButton).toHaveStyle(`background-color: ${colours.primaryBlue}`)
			expect(ratingButton).toHaveStyle(`color: ${colours.primaryWhite}`)
		})
	})
})
