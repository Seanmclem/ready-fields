import React, { FC } from 'react'
import './TextInput.css'

export interface ITextInputProps {
    name: string;
    text: string;
    setText: any;
    label?: string;
    type?: string;
    error?: string;
    placeholder?: string;
}

export const TextInput: FC<ITextInputProps> = ({ name, label, text, setText, type = '', error = '', placeholder = '' }) => {

    const handleChange = (event: any) => {
        setText(event.target.value);
    }

    return (
        <div className="input-label-container">
            {label ? (
                <label htmlFor={name}>{label}</label>
            ) : null}
            <input
                name={name}
                type={type || 'text'}
                onChange={handleChange}
                value={text}
                placeholder={placeholder}
            />
            {error ? (
                <span className="error">{error}</span>
            ) : null}
        </div>
    )
}