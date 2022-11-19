import styled from "styled-components"
import { colours } from "../../../constants/styles"

export const PrimaryButton = styled.button`
	font-size: 16px;
	color: ${colours.primaryBlue};
	background-color: ${colours.primaryYellow};
	height: auto;
	min-height: 50px;
	width: 100%;
	border: 0;
	border-radius: 5px;
	border: 1px solid transparent;

	&:hover {
		border: 1px solid ${colours.primaryBlue}
	}
`
