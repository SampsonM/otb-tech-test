import { H3, P, Strong } from "@/components/Common/Typography/Typography"
import styled from "styled-components"
import { deviceWidthQuery } from "../../../constants/styles"

export const DetailsContainer = styled.div`
	padding: 10px;
	
	@media ${deviceWidthQuery.tablet} {
		padding: 15px;
		width: 35%;
	}
`

export const LocationRatingContainer = styled.div`
	display: flex;
	flex-direction: row;
	
	@media ${deviceWidthQuery.tablet} {
		flex-direction: column;
	}
`

export const HotelLocation = styled(P)`
	color: #747373;
	font-style: italic;
	margin-right: 10px;

	@media ${deviceWidthQuery.tablet} {
		margin-right: 0;
	}
`

export const TotalPrice = styled(Strong)`
	font-size: 25px;
`
