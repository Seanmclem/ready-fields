import React from 'react'
import './TextInput.css'
import { ITextInputProps } from '../types';

export const TextInput: React.FC<ITextInputProps> = ({ name, label, text, setText, type = '', error = '', placeholder = '' }) => {

    const handleChange = (event: any) => {
        setText(event.target.value);
    }

    return (
        <div className="input-label-container">
            {label ? (
                <label>{label}</label>
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