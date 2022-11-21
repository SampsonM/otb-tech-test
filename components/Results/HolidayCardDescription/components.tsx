import styled from "styled-components";
import { colours, deviceWidthQuery } from '../../../constants/styles'

export const DescriptionContainer = styled.div`
	position: relative;
`

export const DescriptionWrapper = styled.div`
	width: 100%;
	height: auto;
	padding: 10px;
	
	@media ${deviceWidthQuery.tablet} {
		padding: 15px;
	}
`

export const ReadMoreButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	background-color: ${colours.primaryWhite};
	height: 30px;
	text-align: left;
	width: 100%;

	&:hover {
		background-color: ${colours.secondaryGrey};
	}

	@media ${deviceWidthQuery.tablet} {
		width: auto;
		min-width: 253px;
		margin: 0 auto;
    position: absolute;
    top: -36px;
    height: auto;
	}
`
