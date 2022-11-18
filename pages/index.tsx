import Head from 'next/head'
import Image from 'next/image'
import { PageWrapper } from '@/components/common'
import { Hotel } from '@/components/Results'

export default function Results() {
  return (
    <div>
      <Head>
        <title>OTB Tech Test</title>
        <meta name="description" content="A Next JS app that contains an OTB tech test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <Hotel />
      </PageWrapper>
    </div>
  )
}
