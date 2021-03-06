import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckboxInput, CheckboxInputProps } from '../src';

const meta: Meta = {
  title: 'Checkbox Input',
  component: CheckboxInput,
  argTypes: {
    // children: {
    //   control: {
    //     type: 'text',
    //   },
    // },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxInputProps> = args => <CheckboxInput {...args}/>;


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  name: "Generic Label"
} as CheckboxInputProps;
