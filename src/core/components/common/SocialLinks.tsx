import * as React from 'react'

import DynamicIcon from '../icons/DynamicIcon'
import AppLink from './AppLink'

const SocialLinks: React.FC = () => {
  return (
    <div className="flex mt-4 space-x-3">
      <AppLink
        className="text-secondary-7 hover:text-secondary-8"
        href="https://github.com/zubairaziz"
      >
        <DynamicIcon icon="GithubIcon" />
      </AppLink>
      <AppLink
        className="text-secondary-7 hover:text-secondary-8"
        href="https://www.linkedin.com/in/zubairaziz13"
      >
        <DynamicIcon icon="LinkedInIcon" />
      </AppLink>
      <AppLink
        className="text-secondary-7 hover:text-secondary-8"
        href="https://twitter.com/zubairaziz_13"
      >
        <DynamicIcon icon="TwitterIcon" />
      </AppLink>
      <AppLink
        className="text-secondary-7 hover:text-secondary-8"
        href="mailto:zubairaziz.dev@gmail.com"
      >
        <DynamicIcon icon="MailIcon" />
      </AppLink>
    </div>
  )
}

export default SocialLinks
