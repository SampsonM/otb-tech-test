import React from "react"
import { PrimaryButton, H3, P, Strong } from "@/components/Common"
import { TotalPrice, DetailsContainer, HotelLocation, LocationRatingContainer } from "./components"
import { HolidayRatings } from "@/components/Results"
import { HolidayData } from "@/constants/mockData"

const Adults = ({ adultCount }: { adultCount: number }) =>
	<>
		<Strong data-testid="adult-count">{adultCount}</Strong> Adult{adultCount > 1 ? 's' : ''}
	</>

// Assuming child or infant would only be present with an adult here...
const Children = ({ childrenCount }: { childrenCount: number }) => 
	<>
		, <Strong data-testid="children-count">{childrenCount}</Strong> {childrenCount > 1 ? 'children' : 'child'}
	</>

const Infants = ({ infantCount }: { infantCount: number }) => 
	<>
		{' '}& <Strong data-testid="infant-count">{infantCount}</Strong> infant{infantCount > 1 ? 's' : ''}
	</>

const alertUserTheyClicked = () => {
	alert('くコ:彡 \n\nYou clicked the button. \n\nWell done... \n\nNothing happens here though as there is no link, ah well.')
}

const HolidayCardDetails = ({
	hotelName,
	location,
	adultCount,
	childrenCount,
	infantCount,
	departureDate,
	holidayDays,
	departureAirport,
	totalPrice,
	rating,
}: HolidayData): JSX.Element => {

	return (
		<DetailsContainer>
			<H3>{hotelName}</H3>

			<LocationRatingContainer>
				<HotelLocation>
					{location}
				</HotelLocation>

				<HolidayRatings rating={rating} />
			</LocationRatingContainer>

			<P>
				<Adults adultCount={adultCount} />
				{childrenCount > 0 && <Children childrenCount={childrenCount} />}
				{infantCount > 0 && <Infants infantCount={infantCount} />}
			</P>

			<P><Strong>{departureDate}</Strong> for <Strong>{holidayDays}</Strong> days</P>

			<P>departing from <Strong>{departureAirport}</Strong></P>
			
			<PrimaryButton onClick={alertUserTheyClicked}>
				<P>Book now</P>
				<P><TotalPrice>£{totalPrice}</TotalPrice></P>
			</PrimaryButton>
		</DetailsContainer>
	)
}

export default HolidayCardDetails
