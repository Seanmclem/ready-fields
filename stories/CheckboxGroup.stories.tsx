import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckboxGroupInput, CheckboxGroupProps, CheckboxInputProps, ItemInterface } from '../src';
// import { useState } from '@storybook/addons';

const meta: Meta = {
  title: 'Checkbox Group',
  component: CheckboxGroupInput,
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

const CbGroup1: any = (args) => {
  const printSizesData: ItemInterface[] = [
      {
          name: 'Small',
          data: {
              dimensions: { width: 7, height: 7 },
              priceAddition: 25,
          },
          selected: false,
      },
      {
          name: 'Medium',
          data: {
              dimensions: { width: 20, height: 20 },
              priceAddition: 35,
          },
          selected: false,
      },
      {
          name: 'Large',
          data: {
              dimensions: { width: 40, height: 40 },
              priceAddition: 50,
          },
          selected: false,
      },
  ]

  const [items, setItems] = useState<ItemInterface[]>(printSizesData)
  return <CheckboxGroupInput items={items} setItems={setItems} {...args} />
}

const Template: Story<CheckboxGroupProps> = args => <CbGroup1 {...args}/>;


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  label: "Checklist Items",
} as CheckboxGroupProps;
