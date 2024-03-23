import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Text,
    Hr,
    Container,
    Section,
    Preview
} from '@react-email/components'

import {Tailwind} from '@react-email/tailwind'
type ContactFormEmailProps = {
    message: string
    senderEmail: string
}
export default function ContactFormEmail({
    message,
    senderEmail
}:ContactFormEmailProps) {
  return (
    <Html>
        <Preview>New message from your portofolio sites</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>
                            You recieved the following message from the contact form in you portofolio
                        </Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr/>
                        <Text>
                            The senders email is {senderEmail}
                        </Text>

                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
