import React from "react"
import { HolidayData } from "@/constants/mockData"
import { HolidayCard } from "@/components/Results"
import { HolidayResultsWrapper } from "./components"

const HolidayResults = ({ holidayResults }: { holidayResults: HolidayData[] }) => {
	return (
		<HolidayResultsWrapper>
			{
				holidayResults.map((holidayData) => <HolidayCard key={`holiday-result-${holidayData.id}`} holidayData={holidayData} />)
			}
		</HolidayResultsWrapper>
	)
}

export default HolidayResults
