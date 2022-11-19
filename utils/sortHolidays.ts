import { HolidayData } from "@/constants/mockData";

export const sortHolidaysAlphabeticallyByHotelName = (holidays: HolidayData[]): HolidayData[] => {
	return holidays.sort((a, b) => a.hotelName.localeCompare(b.hotelName))
}

export const sortHolidaysByTotalPrice = (holidays: HolidayData[]): HolidayData[] => {
	return holidays.sort((a, b) => Number(a.totalPrice) - Number(b.totalPrice))
}

export const sortHolidaysByTotalRating = (holidays: HolidayData[]): HolidayData[] => {
	return holidays.sort((a, b) => b.rating - a.rating)
}
