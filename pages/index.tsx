import React, { useState } from 'react'
import Head from 'next/head'
import { PageWrapper } from '@/components/Common'
import { HolidayResultSorter, HolidaySortAndResultsContainer, HolidayResults } from '@/components/Results'
import { HolidayData, mockResults } from '@/constants/mockData'
import { SortByMethods } from '@/components/Results/HolidayResultSorter/HolidayResultSorter'

export default function Results() {
  const [holidayResults, setHolidayResults] = useState<HolidayData[]>(mockResults)

  return (
    <PageWrapper>
      <Head>
        <title>OTB Tech Test</title>
        <meta name="description" content="A Next JS app that contains an OTB tech test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HolidaySortAndResultsContainer>
        <HolidayResultSorter
          setHolidayResults={setHolidayResults}
          holidayResults={holidayResults}
          defaultSortMethod={SortByMethods.PRICE}
        />
        <HolidayResults holidayResults={holidayResults} />
      </HolidaySortAndResultsContainer>
    </PageWrapper>
  )
}
