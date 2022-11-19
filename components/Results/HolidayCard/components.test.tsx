import React from "react"
import { render } from "@testing-library/react"
import { Container, StyledImage } from './components'

describe("Elements", () => {
	test("Container fragment matches the snapshot", () => {
		const { asFragment } = render(<Container />)
		expect(asFragment()).toMatchSnapshot()
	})

	test("StyledImage fragment matches the snapshot", () => {
		const { asFragment } = render(
			<StyledImage
				src="/test-url.png"
				alt="Picture of a hotelName"
				height={100}
				width={100}
			/>)
		expect(asFragment()).toMatchSnapshot()
	})
})
