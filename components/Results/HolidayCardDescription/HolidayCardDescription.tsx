import React, { useState } from "react"
import { FaChevronRight, FaChevronUp } from "react-icons/fa"
import { P, Strong } from "@/components/Common"
import { DescriptionWrapper, DescriptionContainer, ReadMoreButton } from "./components"

const HolidayCardDescription = ({ description }: { description: string }) => {
	const [showDescription, setShowDescription] = useState(false)

	const toggleShowDescription = () => {
		setShowDescription((currentShowDescription) => !currentShowDescription)
	}

	const getMoreOrLessText = () => showDescription ? 'less' : 'more'

	const Chevron = () => showDescription
		?  <FaChevronRight />
		: <FaChevronUp />

	return (
		<DescriptionContainer>
			<ReadMoreButton onClick={toggleShowDescription}>
				<P><Strong>Read {getMoreOrLessText()}</Strong> about this hotel <Strong>{Chevron()}</Strong></P>
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
