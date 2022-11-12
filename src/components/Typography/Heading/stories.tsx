import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default value'
}
