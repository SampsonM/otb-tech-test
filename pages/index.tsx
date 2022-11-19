import Head from 'next/head'
import { PageWrapper } from '../components/Common'
import { HolidayCard } from '@/components/Results'
import { useState } from 'react'

// Some assumptions tagged against the types;
export type HolidayData = {
  hotelName: string;
  adultCount: number;
  childrenCount: number;
  cost: string; // comes as a string to be rendered not an int to manipulated by the front end
  departureAirport: string;
  departureDate: string;
  description: string;
  holidayDays: number;
  infantCount: number;
  location: string; // location a name as a string, not lat-long coords
  rating: number; // always a whole number 0 and above
  hotelImageUrl: string; // is a locally stored img
}

export default function Results() {
  const [holidayData, setHolidayData] = useState<HolidayData>({
    hotelName: "Iberostar Grand Salome",
    adultCount: 2,
    childrenCount: 2,
    cost: "1136.50",
    departureAirport: "East Midlands",
    departureDate: "3rd July 2019",
    description: "The Iberostar - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    holidayDays: 7,
    infantCount: 1,
    location: "Costa Adeje, Tenerife",
    rating: 5,
    hotelImageUrl: "/images/iberostar-hotel.png",
  })

  return (
    <div>
      <Head>
        <title>OTB Tech Test</title>
        <meta name="description" content="A Next JS app that contains an OTB tech test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <HolidayCard holidayData={holidayData} />
      </PageWrapper>
    </div>
  )
}
