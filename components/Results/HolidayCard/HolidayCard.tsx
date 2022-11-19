import React from "react"
import {
	Container,
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
		<Container>
			<ImageAndDetails>
				<StyledImageWrapper>
					<StyledImage
						src={holidayData.hotelImageUrl}
						alt={`Picture of a ${holidayData.hotelName}`}
						fill
					/>
				</StyledImageWrapper>

				{/* Would rather pass in individual props for readability, but spreading for brevity */}
				<HolidayCardDetails {...holidayData} />
			</ImageAndDetails>
			
			<HolidayCardDescription description={holidayData.description} />
		</Container>
	)
}

export default HolidayCard
