import React, { Dispatch, SetStateAction, useState } from "react"
import { FaPoundSign, FaSortAlphaDown, FaStar } from "react-icons/fa"
import { P, Strong } from "@/components/Common"
import { HolidayData } from "@/constants/mockData"
import { SortButton, SorterContainer } from "./components"

type HolidayResultSorterProps = {
	setHolidayResults: Dispatch<SetStateAction<HolidayData[]>>;
	holidayResults: HolidayData[];
}

const ActiveFilters = {
	ALPHABETIC: "ALPHABETIC",
	PRICE: "PRICE",
	RATING: "RATING",
} as const;

type ActiveFiltersUnion = typeof ActiveFilters[keyof typeof ActiveFilters];

const HolidayResultSorter = ({ setHolidayResults, holidayResults }: HolidayResultSorterProps) => {
	const [activeFilter, setActiveFilter] = useState<ActiveFiltersUnion>(ActiveFilters.ALPHABETIC)

	return (
		<SorterContainer>
			<SortButton active={activeFilter === ActiveFilters.ALPHABETIC}>
				<P>sort <Strong>alphabetically</Strong></P> <FaSortAlphaDown />
			</SortButton>
			<SortButton active={activeFilter === ActiveFilters.PRICE}>
				<P>sort by <Strong>price</Strong></P>  <FaPoundSign />
			</SortButton>
			<SortButton active={activeFilter === ActiveFilters.RATING}>
				<P>sort by <Strong>star rating</Strong></P>  <FaStar />
			</SortButton>
		</SorterContainer>
	)
}

export default HolidayResultSorter
