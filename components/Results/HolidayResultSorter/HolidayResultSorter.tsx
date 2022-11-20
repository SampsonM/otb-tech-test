import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"
import { FaPoundSign, FaSortAlphaDown, FaStar } from "react-icons/fa"
import { P, Strong } from "@/components/Common"
import { HolidayData } from "@/constants/mockData"
import { SortButton, SorterContainer } from "./components"
import { sortHolidaysAlphabeticallyByHotelName, sortHolidaysByTotalPrice, sortHolidaysByRating } from "../../../utils/sortHolidays"

export const SortByMethods = {
	ALPHABETIC: "ALPHABETIC",
	PRICE: "PRICE",
	RATING: "RATING",
} as const;

type SortMethodsUnion = typeof SortByMethods[keyof typeof SortByMethods];

type HolidayResultSorterProps = {
	setHolidayResults: Dispatch<SetStateAction<HolidayData[]>>;
	holidayResults: HolidayData[];
	defaultSortMethod: SortMethodsUnion
}

const sortByFunctions = {
	[SortByMethods.ALPHABETIC]: sortHolidaysAlphabeticallyByHotelName,
	[SortByMethods.PRICE]: sortHolidaysByTotalPrice,
	[SortByMethods.RATING]: sortHolidaysByRating
}

const HolidayResultSorter = ({ setHolidayResults, holidayResults, defaultSortMethod }: HolidayResultSorterProps) => {
	const [activeSortMethod, setActiveSortMethod] = useState<SortMethodsUnion | null>(null)

	const sortDataByMethodAndUpdateActive = useCallback((sortByMethod: SortMethodsUnion) => {
		if (activeSortMethod !== sortByMethod) {
			const sortByFunction = sortByFunctions[sortByMethod]
			const sortedHolidays = sortByFunction(holidayResults)
			setHolidayResults(sortedHolidays)
			setActiveSortMethod(sortByMethod)
		}
	}, [setHolidayResults, setActiveSortMethod, activeSortMethod, holidayResults])

	const handleAlphabeticSortButtonClick = () => {
		sortDataByMethodAndUpdateActive(SortByMethods.ALPHABETIC)
	}

	const handleTotalPriceSortButtonClick = () => {
		sortDataByMethodAndUpdateActive(SortByMethods.PRICE)
	}

	const handleRatingSortButtonClick = () => {
		sortDataByMethodAndUpdateActive(SortByMethods.RATING)
	}

	useEffect(() => {
		// This should only be null on initial render which forces us to sort the
		// results using the default sort method prop
		const activeSortMethodNotSet = activeSortMethod === null
		
		if (activeSortMethodNotSet) {
			sortDataByMethodAndUpdateActive(defaultSortMethod)
		}
	}, [sortDataByMethodAndUpdateActive, activeSortMethod, defaultSortMethod])

	return (
		<SorterContainer>
			<SortButton onClick={handleAlphabeticSortButtonClick} active={activeSortMethod === SortByMethods.ALPHABETIC}>
				<P>sort <Strong>alphabetically</Strong></P> <FaSortAlphaDown />
			</SortButton>
			<SortButton onClick={handleTotalPriceSortButtonClick} active={activeSortMethod === SortByMethods.PRICE}>
				<P>sort by <Strong>price</Strong></P>  <FaPoundSign />
			</SortButton>
			<SortButton onClick={handleRatingSortButtonClick} active={activeSortMethod === SortByMethods.RATING}>
				<P>sort by <Strong>star rating</Strong></P>  <FaStar />
			</SortButton>
		</SorterContainer>
	)
}

export default HolidayResultSorter
