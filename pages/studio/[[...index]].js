import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'sanity.config'

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
        <link rel="icon" href="../../favicon.ico" />
      </Head>
      
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  )
}