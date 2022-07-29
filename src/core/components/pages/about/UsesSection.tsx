import * as React from 'react'

import { Card, AppLink } from 'core/components/common'
import { Prose } from 'core/components/markdown'

const UsesSection = () => {
  return (
    <Card>
      <Prose>
        <h2>Uses</h2>

        <h3>Harware</h3>
        <ul>
          <li>
            <strong>💻 Computer</strong> -{' '}
            <AppLink href="https://www.apple.com/macbook-air-m1/">MacBook Air (M1, 2020)</AppLink> -
            13.3-inch (2560 &times; 1600), 500 GB storage, 8GB Memory.
          </li>
          <li>
            <strong>⌨️ Keyboard</strong> -{' '}
            <AppLink href="https://www.keychron.com/collections/normal-profile-keyboards/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard">
              Keychron K8
            </AppLink>{' '}
            - Tenkeyless wireless mechanical keyboard, RGB backlighting, Gateron Brown keys.
          </li>
          <li>
            <strong>🖱 Mouse</strong> -{' '}
            <AppLink href="https://www.logitech.com/en-us/products/mice/mx-anywhere-3.910-005833.html">
              Logitech MX Anywhere 3
            </AppLink>{' '}
            - Wireless mouse, 6 buttons, 200-4000 dpi.
          </li>
          <li>
            <strong>📱 Phone</strong> -{' '}
            <AppLink href="https://www.apple.com/iphone-12/key-features/">iPhone 12 mini</AppLink> -
            You know what this is.
          </li>
          <li>
            <strong>🔋 Chargers</strong> -{' '}
            <AppLink href="https://www.anker.com/">Anything by Anker</AppLink> - I have a few of
            their chargers and cables. Very happy with their products.
          </li>
        </ul>

        <h3>Development</h3>
        <ul>
          <li>
            <strong>📝 Editor</strong> -{' '}
            <AppLink href="https://code.visualstudio.com/">Visual Studio Code</AppLink> - My editor
            of choice. I use it for everything from writing code to copywriting, or editing CSV
            files.
          </li>
          <li>
            <strong>💅 Theme</strong> -{' '}
            <AppLink href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode">
              Synthwave &apos;84
            </AppLink>{' '}
            - A Synthwave-inspired colour theme to satisfy your neon dreams.
          </li>
          <li>
            <strong>🔤 Font</strong> -{' '}
            <AppLink href="https://github.com/tonsky/FiraCode">Fira Code</AppLink> - A monospaced
            font with programming ligatures.
          </li>
          <li>
            <strong>📺 Terminal</strong> - <AppLink href="https://www.warp.dev/">Warp</AppLink> - A
            blazingly fast, rust-based terminal reimagined from the ground up to work like a modern
            app.
          </li>
          <li>
            <strong>🔍 Spotlight Search</strong> -{' '}
            <AppLink href="https://www.raycast.com/">Raycast</AppLink> - A blazingly fast, totally
            extendable launcher. It lets you complete tasks, calculate, share common links, and much
            more.
          </li>
          <li>
            <strong>🌐 Browser</strong>{' '}
            <ul>
              <li>
                <AppLink href="https://www.mozilla.org/en-US/firefox/new/">Firefox</AppLink> - A
                browser that puts you in control of your online experience. My default browser. I
                use it for everything from browsing the web to developing web apps.
              </li>
              <li>
                <AppLink href="https://www.google.com/chrome/">Google Chrome</AppLink> - A fast,
                secure, and free web browser, built for the modern web. I use it for testing and
                occasional browsing.
              </li>
              <li>
                <AppLink href="https://brave.com/">Brave</AppLink> - A privacy-focused browser that
                blocks ads and trackers by default.
              </li>
            </ul>
          </li>
        </ul>

        <h3>Others</h3>
        <ul>
          <li>
            <strong>🎨 Design Tool</strong> - <AppLink href="https://www.figma.com/">Figma</AppLink>{' '}
            - A collaborative interface design tool.
          </li>
          <li>
            <strong>📝 Note Taking</strong> -{' '}
            <AppLink href="https://www.notion.so/">Notion</AppLink> - A note-taking and
            collaboration tool that blends your everyday work apps into one.
          </li>
          <li>
            <strong>🎶 Music</strong> - <AppLink href="https://www.spotify.com/">Spotify</AppLink> -
            My preference for listening to music or podcasts while I work.
          </li>
          <li>
            <strong>🔒 Password Manager</strong> -{' '}
            <AppLink href="https://1password.com/">1Password</AppLink> - A password manager that
            goes beyond simple password storage.
          </li>
        </ul>
      </Prose>
    </Card>
  )
}

export default UsesSection
