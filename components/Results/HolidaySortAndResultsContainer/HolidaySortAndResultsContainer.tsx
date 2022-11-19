import { deviceWidthQuery } from "@/constants/styles";
import styled from "styled-components";

const HolidaySortAndResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	
	@media ${deviceWidthQuery.tablet} {
		flex-direction: row;
		justify-content: space-around;
	}
`

export default HolidaySortAndResultsContainer
