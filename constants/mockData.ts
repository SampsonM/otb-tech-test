// Some assumptions tagged against the types;
export type HolidayData = {
  id: number;
  hotelName: string;
  adultCount: number;
  childrenCount: number;
  totalPrice: string; // comes as a string to be rendered not an int to manipulated by the front end
  departureAirport: string;
  departureDate: string;
  description: string;
  holidayDays: number;
  infantCount: number;
  location: string; // location a name as a string, not lat-long coords
  rating: number; // always a whole number 0 and above
  hotelImageUrl: string; // is a locally stored img
}

export const mockResults: HolidayData[] = [
  {
    id: 1,
		hotelName: "Iberostar Grand Salome",
		adultCount: 2,
		childrenCount: 2,
		totalPrice: "1136.50",
		departureAirport: "East Midlands",
		departureDate: "3rd July 2019",
		description: "The Iberostar - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		holidayDays: 7,
		infantCount: 1,
		location: "Costa Adeje, Tenerife",
		rating: 5,
		hotelImageUrl: "/images/iberostar-hotel.png",
	},
  {
    id: 2,
    hotelName: "Aguamarina Golf Hotel",
    adultCount: 2,
    childrenCount: 1,
    totalPrice: "696.80",
    departureAirport: "Liverpool",
    departureDate: "27th May 2019",
    description: "The Aguamrina - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    holidayDays: 7,
    infantCount: 0,
    location: "Costa Adeje, Tenerife",
    rating: 4,
    hotelImageUrl: "/images/golf-resort.png",
	},
  {
    id: 3,
    hotelName: "Las Piramidas Resort",
    adultCount: 2,
    childrenCount: 2,
    totalPrice: "499.99",
    departureAirport: "Manchester",
    departureDate: "3rd July 2019",
    description: "Las Piramidas Resort - Lorem ipsum dolor sit amet, consectetur adipnim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    holidayDays: 7,
    infantCount: 0,
    location: "Costa Adeje, Tenerife",
    rating: 3,
    hotelImageUrl: "/images/piramidas.png",
}
]