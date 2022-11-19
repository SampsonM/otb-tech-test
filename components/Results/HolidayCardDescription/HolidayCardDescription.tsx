import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { Strong } from "@/components/Common"
import { DescriptionWrapper, DescriptionContainer, ReadMoreButton } from "./components"

const HolidayCardDescription = ({ description }: { description: string }) => {
	const [showDescription, setShowDescription] = useState(false)

	const toggleShowDescription = () => {
		setShowDescription((currentShowDescription) => !currentShowDescription)
	}

	const getMoreOrLessText = () => showDescription ? 'less' : 'more'

	const Chevron = () => showDescription
		?  <FaChevronDown />
		: <FaChevronUp />


	return (
		<DescriptionContainer>
			<ReadMoreButton onClick={toggleShowDescription}>
				<Strong>Read {getMoreOrLessText()}</Strong>&nbsp; about this hotel&nbsp;<Strong>{Chevron()}</Strong>
			</ReadMoreButton>

			{
				showDescription
					? <DescriptionWrapper>
							{description}
						</DescriptionWrapper>
					: null
			}
		</DescriptionContainer>
	)
}

export default HolidayCardDescription
