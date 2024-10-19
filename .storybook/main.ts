import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['./home.mdx', '../stories/**/*.@(mdx)', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {},
      },
    },
  ],
  docs: {
    defaultName: 'docs',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    '../public',
    // { from: "../public", to: "assets" }
  ],
  viteFinal: (config) => {
    config.base = '/glasscn-ui/'
    return config
  },
}
export default config
