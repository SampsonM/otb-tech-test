import React from "react"
import { render } from "@testing-library/react"
import { Container } from './Elements'

describe("Elements", () => {
	test("Container fragment matches the snapshot", () => {
		const { asFragment } = render(<Container />)
		expect(asFragment()).toMatchSnapshot()
	})
})
