import { Story, Meta } from '@storybook/react'
import TestComponent from '.'
export default {
  title: 'TestComponent',
  component: TestComponent
} as Meta

export const Default: Story = () => <TestComponent />
