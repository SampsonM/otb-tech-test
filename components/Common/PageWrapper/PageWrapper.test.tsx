import React from "react"
import { render } from "@testing-library/react"
import PageWrapper from './PageWrapper'

describe("PageWrapper", () => {
	test("PageWrapper fragment matches the snapshot", () => {
		const { asFragment } = render(<PageWrapper />)
		expect(asFragment()).toMatchSnapshot()
	})
})
