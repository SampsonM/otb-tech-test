import styled from 'styled-components'
import Image from 'next/image'
import { colours, deviceWidthQuery } from '../../../constants/styles'

export const HolidayCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colours.primaryWhite};
	margin-bottom: 20px;
`

export const ImageAndDetails = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	@media ${deviceWidthQuery.tablet} {
		flex-direction: row;
		height: 410px;
	}
	
	@media ${deviceWidthQuery.laptop} {
		height: 340px;
	}
`

export const StyledImageWrapper = styled.div`
	position: relative;
	max-width: 100%;
	height: 250px;
	
	@media ${deviceWidthQuery.tablet} {
		height: auto;
		width: 65%;
	}
`

export const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
