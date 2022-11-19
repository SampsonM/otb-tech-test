import React from "react"
import { FaStar } from "react-icons/fa"
import { RatingsWrapper } from "./components"

const HolidayRatings = ({ rating }: { rating: number }) => {
	const ratingGreaterThanZero = rating > 0

	return ratingGreaterThanZero
			? <RatingsWrapper>
					{
					[...Array(rating)].map((_value, index) => 
							<FaStar
								data-testid="star-rating"
								key={`${index}-star`}
								color="#fedc06"
							/>
						)
					}
				</RatingsWrapper>
			: null
}

export default HolidayRatings
