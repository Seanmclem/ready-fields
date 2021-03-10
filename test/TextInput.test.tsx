import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as TextInput } from '../stories/TextInput.stories';

const props = {
    name: "test",
    text: "",
    setText: jest.fn()
}

describe('TextInput', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
