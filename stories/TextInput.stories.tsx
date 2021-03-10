import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '../src';

const meta: Meta = {
  title: 'Text Input',
  component: TextInput,
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

const Template: Story<TextInputProps> = args => <TextInput {...args}/>;


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: typeof TextInput = Template.bind({});
export const WithSomeValues = Template.bind({});

WithSomeValues.args = {
  name: "my-name",
  label: "Mr Label Jr",
  placeholder: "place hold me"
} as TextInputProps;
