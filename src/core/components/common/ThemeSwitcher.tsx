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
        className={`${enabled ? 'bg-secondary-2' : 'bg-secondary-7'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Change theme</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <DynamicIcon
            icon={enabled ? 'MoonIcon' : 'SunIcon'}
            className="block w-full h-full p-1 text-secondary-6 dark:text-secondary-4"
          />
        </span>
      </Switch>
    </div>
  )
}

export default ThemeSwitcher
