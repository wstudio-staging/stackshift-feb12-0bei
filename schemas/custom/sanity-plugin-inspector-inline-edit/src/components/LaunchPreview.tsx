import {Card, Flex, Stack, Text} from '@sanity/ui'
import React from 'react'
import {DocumentInspectorProps, useClient} from 'sanity'
import resolveProductionUrl from '../resolvePreviewUrl'

export default function LaunchPreview(props: DocumentInspectorProps) {
  const client = useClient({apiVersion: '2021-10-21'})
  const {documentId, onClose} = props
  const [state, setState] = React.useState('idle')
  const [countdown, setCountdown] = React.useState(5)

  React.useEffect(() => {
    if (!documentId) return

    setState('loading')
    client
      .fetch(`*[_id in [$id, "drafts." + $id]]`, {id: documentId})
      .then((docs) => {
        const draft = docs.find((doc) => doc._id.startsWith('drafts.'))
        const published = docs.find((doc) => !doc._id.startsWith('drafts.'))

        const url = resolveProductionUrl(draft || published)
        if (url) {
          setState('loaded')
          window.open(url, '_blank')
        }
      })
      .catch((err) => {
        console.error('Error:', err)
        setState('error')
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, documentId])

  // Close the pane after 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)

      if (countdown === 3) {
        clearInterval(timer)
      }
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      onClose()
    }, 5000)

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (state === 'error') {
    return (
      <Flex direction="column" height="fill" overflow="hidden">
        <Card flex={1} overflow="auto" padding={4}>
          <Stack space={4}>
            <Text size={2} weight="bold">
              Error launching inline editing 😢
            </Text>
            <Text size={1}>This pane will automatically close in {countdown} seconds</Text>
          </Stack>
        </Card>
      </Flex>
    )
  }

  return (
    <Flex direction="column" height="fill" overflow="hidden">
      <Card flex={1} overflow="auto" padding={4}>
        <Stack space={4}>
          <Text size={2} weight="bold">
            {state === 'loading' ? 'Just a sec...' : 'Inline Editing Launched 🚀'}
          </Text>
          <Text size={1}>This pane will automatically close in {countdown} seconds</Text>
        </Stack>
      </Card>
    </Flex>
  )
}
