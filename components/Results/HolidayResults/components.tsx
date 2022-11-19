import { deviceWidthQuery } from "@/constants/styles"
import styled from "styled-components"

export const HolidayResultsWrapper = styled.div`
	width: 100%;

	@media ${deviceWidthQuery.tablet} {
		width: 60%;
	}
`