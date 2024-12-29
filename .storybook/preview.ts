import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { regex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
