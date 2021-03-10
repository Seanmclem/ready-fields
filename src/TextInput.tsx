import React, { FC } from 'react';
import './TextInput.css';

export interface TextInputProps {
  name: string;
  text: string;
  setText: any;
  label?: string;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden"
    | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit"
    | "tel" | "text" | "time" | "url" | "week";
  error?: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = ({
  name,
  label,
  text,
  setText,
  type = '',
  error = '',
  placeholder = '',
}) => {
  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div
        className="input-label-container"
    >
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        name={name}
        type={type || 'text'}
        onChange={handleChange}
        value={text}
        placeholder={placeholder}
      />
      {error ? <span className="error">{error}</span> : null}
    </div>
  );
};

// const Template: Story<Props> = args => <Thing {...args}/>;
// const FishTemplate: Story<Props> = args => <Thing {...args}>fish</Thing>;

// export const Default = Template.bind({});
// export const Fish = Fish