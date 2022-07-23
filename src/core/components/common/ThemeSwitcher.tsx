import * as React from 'react'

import { useTheme } from 'next-themes'

import { Switch } from '@headlessui/react'

import { DynamicIcon } from 'core/components'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const enabled = React.useMemo(() => theme === 'dark', [theme])

  return (
    <div className="relative">
      <Switch
        checked={enabled}
        onChange={handleClick}
        className="flex items-center w-8 h-8 border-2 rounded-full shadow-inner border-primary-6 bg-primary-1 focus:outline-0 focus:ring-2 hover:opacity-75"
      >
        <span className="sr-only">Switch theme</span>
        <DynamicIcon
          icon={enabled ? 'MoonIcon' : 'SunIcon'}
          className="block w-full h-full p-1 text-primary-6"
        />
      </Switch>
    </div>
  )
}

export default ThemeSwitcher
