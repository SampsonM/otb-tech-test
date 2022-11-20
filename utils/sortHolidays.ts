import { HolidayData } from "@/constants/mockData";

export const sortHolidaysAlphabeticallyByHotelName = (holidays: HolidayData[]): HolidayData[] => {
	const localHolidays = [...holidays]
	return localHolidays.sort((a, b) => a.hotelName.localeCompare(b.hotelName))
}

export const sortHolidaysByTotalPrice = (holidays: HolidayData[]): HolidayData[] => {
	const localHolidays = [...holidays]
	return localHolidays.sort((a, b) => Number(a.totalPrice) - Number(b.totalPrice))
}

export const sortHolidaysByRating = (holidays: HolidayData[]): HolidayData[] => {
	const localHolidays = [...holidays]
	return localHolidays.sort((a, b) => b.rating - a.rating)
}
