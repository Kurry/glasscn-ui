import { NavigationMenu } from '@/components/ui/navigation-menu'
import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenuDemo } from './navigation-menu-demo'

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  // tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  render: () => <NavigationMenuDemo />,
}
