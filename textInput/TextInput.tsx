import React from 'react'
import './TextInput.scss'

interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
    type?: string;
    error?: string;
}

export const TextInput = (props: ITextInputProps) => {
    const { name, label, text, setText, type = '', error = '' } = { ...props }

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
            />
            {error ? (
                <label className="error">{error}</label>
            ) : null}
        </div>
    )
}