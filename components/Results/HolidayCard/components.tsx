import styled from 'styled-components'
import Image from 'next/image'
import { deviceWidthQuery } from '../../../constants/styles'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
`

export const ImageAndDetails = styled.div`
	display: flex;
	flex-direction: column;

	@media ${deviceWidthQuery.tablet} {
		flex-direction: row;
	}
`

export const StyledImageWrapper = styled.div`
	width: 100%;
	height: auto;

	@media ${deviceWidthQuery.tablet} {
		width: 65%;
	}
`

export const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
`

export const Description = styled.div`
	padding: 10px;
	
	@media ${deviceWidthQuery.tablet} {
		padding: 15px;
		width: 35%;
	}
`
