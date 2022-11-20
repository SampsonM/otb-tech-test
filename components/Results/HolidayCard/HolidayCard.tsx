import React from "react"
import {
	HolidayCardContainer,
	ImageAndDetails,
	StyledImageWrapper,
	StyledImage,
} from './components'
import { HolidayCardDetails, HolidayCardDescription } from "@/components/Results"
import { HolidayData } from "@/constants/mockData"

type HolidayCardProps = {
	holidayData: HolidayData
}

const HolidayCard = ({ holidayData }: HolidayCardProps): JSX.Element => {
	return (
		<HolidayCardContainer>
			<ImageAndDetails>
				<StyledImageWrapper>
					<StyledImage
						src={holidayData.hotelImageUrl}
						alt={`Picture of a ${holidayData.hotelName}`}
						fill
					/>
				</StyledImageWrapper>

				{/* I would rather pass in individual props for readability, but spreading for brevity */}
				<HolidayCardDetails {...holidayData} />
			</ImageAndDetails>
			
			<HolidayCardDescription description={holidayData.description} />
		</HolidayCardContainer>
	)
}

export default HolidayCard
