import * as React from 'react'

import { Card, AppLink } from 'core/components/common'
import { DynamicIcon } from 'core/components/icons'
import type { IconName } from 'core/components/icons/DynamicIcon'
import { Prose } from 'core/components/markdown'

const channels = [
  {
    label: 'Email',
    href: 'mailto:zubairaziz.dev@gmail.com',
    icon: 'MailIcon',
    text: 'zubairaziz.dev@gmail.com',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/zubairaziz_13',
    icon: 'TwitterIcon',
    text: 'zubairaziz_13',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zubairaziz13',
    icon: 'LinkedInIcon',
    text: 'zubairaziz13',
  },
]

const ContactMeSection = () => {
  return (
    <Card>
      <Prose>
        <h2>Contact Me</h2>
        <p>
          <strong>
            NOTE: At the moment, I will not be taking any more freelance clients. Feel free to get
            in touch with me if you believe that I should reconsider (this mostly applies to
            non-profits/organizations for causes that I care about).
          </strong>
        </p>
        <p>
          For any other inquiries, feel free to reach out to me via these channels:
          <ul>
            {channels.map((channel) => (
              <li key={channel.href}>
                <div className="flex items-center pt-2 space-x-3 not-prose group">
                  <DynamicIcon
                    icon={channel.icon as IconName}
                    className="w-5 h-5 text-primary-7 group-hover:text-primary-5"
                  />
                  <span className="sr-only">{channel.label}: </span>
                  <AppLink
                    href={channel.href}
                    className="leading-none text-primary-7 group-hover:text-primary-5"
                  >
                    {channel.text}
                  </AppLink>
                </div>
              </li>
            ))}
          </ul>
        </p>
      </Prose>
    </Card>
  )
}

export default ContactMeSection
