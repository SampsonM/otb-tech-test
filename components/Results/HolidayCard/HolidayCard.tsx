import React from "react"
import { HolidayData } from "../../../pages"
import {
	Container,
	ImageAndDetails,
	StyledImageWrapper,
	StyledImage,
	Description
} from './components'
import { HolidayCardDetails } from "../HolidayCardDetails"

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
						height={300}
						width={500}
					/>
				</StyledImageWrapper>

				{/* Would rather pass in individual props for readability, but spreading for brevity */}
				<HolidayCardDetails {...holidayData} />
			</ImageAndDetails>
			
			<Description>
				{holidayData.description}
			</Description>
		</Container>
	)
}

export default HolidayCard
