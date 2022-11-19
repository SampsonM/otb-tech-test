import React from "react"
import { HolidayData } from "../../../constants/mockData"
import HolidayCard from "../HolidayCard/HolidayCard"

const HolidayResults = ({ holidayResults }: { holidayResults: HolidayData[] }) => {
	return (
		<div>
			{
				holidayResults.map((holidayData) => <HolidayCard key={`holiday-result-${holidayData.id}`} holidayData={holidayData} />)
			}
		</div>
	)
}

export default HolidayResults
