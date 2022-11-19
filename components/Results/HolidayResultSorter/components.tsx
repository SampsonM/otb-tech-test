import styled from 'styled-components'
import { colours, deviceWidthQuery } from '@/constants/styles'

type SortButtonProps = {
	active: boolean;
}

export const SortButton = styled.button<SortButtonProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	background-color: ${props => props.active ? colours.primaryBlue : colours.primaryWhite};
	color: ${props => props.active ? colours.primaryWhite : colours.primaryBlue};
	border: 0;
	margin-bottom: 1px;
	border: 2px solid transparent;

	&:hover, :focus {
		border: 2px solid ${colours.primaryBlue};
		background-color: ${colours.secondaryGrey};
		color: ${colours.primaryBlue};
	}
`

export const SorterContainer = styled.div`
	@media ${deviceWidthQuery.tablet} {
		width: 25%;
	}
`
