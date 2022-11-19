import Head from 'next/head'
import { PageWrapper } from '../components/Common'
import { useState } from 'react'
import { HolidayData, mockResults } from '../constants/mockData'
import HolidayResults from '@/components/Results/HolidayResults/HolidayResults'

export default function Results() {
  const [holidayResults, setHolidayData] = useState<HolidayData[]>(mockResults)

  return (
    <div>
      <Head>
        <title>OTB Tech Test</title>
        <meta name="description" content="A Next JS app that contains an OTB tech test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        {/** filters here now... */}
        <HolidayResults holidayResults={holidayResults} />
      </PageWrapper>
    </div>
  )
}
