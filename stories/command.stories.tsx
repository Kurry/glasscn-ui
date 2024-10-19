import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { glassStorybookConfig } from '@/recipes/glass-cva'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  // tags: ['autodocs'],
  ...glassStorybookConfig,
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: (args) => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
