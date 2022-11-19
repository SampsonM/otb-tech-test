import { render, screen } from "@testing-library/react"
import React from "react"
import HolidayCardDetails from "./HolidayCardDetails"

describe("HolidayCardDetails", () => {
	test("should render correct string with multiple adults, children and infants", () => {
		render(<HolidayCardDetails
			adultCount={2}
			childrenCount={2}
			infantCount={2}
			hotelName="Iberostar Grand Salome"
			cost="1136.50"
			departureAirport={"East Midlands"}
			departureDate={"3rd July 2019"}
			description={"The Iberostar - Lorem"}
			holidayDays={7}
			location={"Costa Adeje, Tenerife"}
			rating={5}
			hotelImageUrl={"/images/iberostar-hotel.png"}
		/>)

		expect(screen.getByText(/Adults,/i)).toBeInTheDocument()
		expect(screen.getByText(/children &/i)).toBeInTheDocument()
		expect(screen.getByText(/infants/i)).toBeInTheDocument()

		expect(screen.getByTestId('adult-count')).toHaveTextContent('2')
		expect(screen.getByTestId('children-count')).toHaveTextContent('2')
		expect(screen.getByTestId('infant-count')).toHaveTextContent('2')
	})

	test("should render correct string with single adults, children and infants", () => {
		render(<HolidayCardDetails
			adultCount={1}
			childrenCount={1}
			infantCount={1}
			hotelName="Iberostar Grand Salome"
			cost="1136.50"
			departureAirport={"East Midlands"}
			departureDate={"3rd July 2019"}
			description={"The Iberostar - Lorem"}
			holidayDays={7}
			location={"Costa Adeje, Tenerife"}
			rating={5}
			hotelImageUrl={"/images/iberostar-hotel.png"}
		/>)

		expect(screen.getByText(/Adult,/i)).toBeInTheDocument()
		expect(screen.getByText(/child &/i)).toBeInTheDocument()
		expect(screen.getByText(/infant/i)).toBeInTheDocument()

		expect(screen.getByTestId('adult-count')).toHaveTextContent('1')
		expect(screen.getByTestId('children-count')).toHaveTextContent('1')
		expect(screen.getByTestId('infant-count')).toHaveTextContent('1')
	})

	test("should render correct string with single adults, and no children or infants", () => {
		render(<HolidayCardDetails
			adultCount={1}
			childrenCount={0}
			infantCount={0}
			hotelName="Iberostar Grand Salome"
			cost="1136.50"
			departureAirport={"East Midlands"}
			departureDate={"3rd July 2019"}
			description={"The Iberostar - Lorem"}
			holidayDays={7}
			location={"Costa Adeje, Tenerife"}
			rating={5}
			hotelImageUrl={"/images/iberostar-hotel.png"}
		/>)

		expect(screen.getByText(/Adult/i)).toBeInTheDocument()
		expect(screen.queryByText(/child &/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/infant/i)).not.toBeInTheDocument()

		expect(screen.getByTestId('adult-count')).toHaveTextContent('1')
		expect(screen.queryByTestId('children-count')).not.toBeInTheDocument()
		expect(screen.queryByTestId('infant-count')).not.toBeInTheDocument()
	})

	test("should render correct string with single adults, and no children or infants", () => {
		render(<HolidayCardDetails
			adultCount={1}
			// @ts-expect-error - testing "runtime" values
			childrenCount={undefined}
			// @ts-expect-error - testing "runtime" values
			infantCount={undefined}
			hotelName="Iberostar Grand Salome"
			cost="1136.50"
			departureAirport={"East Midlands"}
			departureDate={"3rd July 2019"}
			description={"The Iberostar - Lorem"}
			holidayDays={7}
			location={"Costa Adeje, Tenerife"}
			rating={5}
			hotelImageUrl={"/images/iberostar-hotel.png"}
		/>)

		expect(screen.getByText(/Adult/i)).toBeInTheDocument()
		expect(screen.queryByText(/child &/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/infant/i)).not.toBeInTheDocument()

		expect(screen.getByTestId('adult-count')).toHaveTextContent('1')
		expect(screen.queryByTestId('children-count')).not.toBeInTheDocument()
		expect(screen.queryByTestId('infant-count')).not.toBeInTheDocument()
	})

	// More tests could be written but mostly testing all props are rendered as expected
	// for this test I've just covered the logic
	// To test the text we would look for the text rather than test-ids to show
	// clearer desire of what we want to test and test assertion readability 
})
