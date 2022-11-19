import { sortHolidaysAlphabeticallyByHotelName, sortHolidaysByTotalPrice, sortHolidaysByTotalRating } from "./sortHolidays"

describe("sortHolidays", () => {
	test("should sort holidays alphabetically", () => {
		const sortedHolidays = sortHolidaysAlphabeticallyByHotelName([
			// @ts-expect-error testing basic input
			{ hotelName: "z" }, { hotelName: "g" }, { hotelName: "A" }, { hotelName: "K" }
		])

		expect(sortedHolidays[0].hotelName).toBe("A")
		expect(sortedHolidays[1].hotelName).toBe("g")
		expect(sortedHolidays[2].hotelName).toBe("K")
		expect(sortedHolidays[3].hotelName).toBe("z")
	})

	test("should sort holidays by price", () => {
		const sortedHolidays = sortHolidaysByTotalPrice([
			// @ts-expect-error testing basic input
			{ totalPrice: "696.80" }, { totalPrice: "1169.00" }, { totalPrice: "123456.00" }, { totalPrice: "00.00" }
		])

		expect(sortedHolidays[0].totalPrice).toBe("00.00")
		expect(sortedHolidays[1].totalPrice).toBe("696.80")
		expect(sortedHolidays[2].totalPrice).toBe("1169.00")
		expect(sortedHolidays[3].totalPrice).toBe("123456.00")
	})

	test("should sort holidays by rating", () => {
		const sortedHolidays = sortHolidaysByTotalRating([
			// @ts-expect-error testing basic input
			{ rating: 5 }, { rating: 1 }, { rating: 2 }, { rating: 5 }, { rating: 3 }, { rating: 4 },
		])

		expect(sortedHolidays[0].rating).toBe(5)
		expect(sortedHolidays[1].rating).toBe(5)
		expect(sortedHolidays[2].rating).toBe(4)
		expect(sortedHolidays[3].rating).toBe(3)
		expect(sortedHolidays[4].rating).toBe(2)
		expect(sortedHolidays[5].rating).toBe(1)
	})
})