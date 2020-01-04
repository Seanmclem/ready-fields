import React from 'react'
import './TextInput.scss'

interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
}

export const TextInput = (props: ITextInputProps) => {
    const { name, label, text, setText } = { ...props }

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
                type="text"
                onChange={handleChange}
                value={text}
            />
        </div>
    )
}

// const [error, setError] = React.useState(null);
// {error && (
//     <label style={{ color: "red" }} htmlFor="message">
//         {error}
//     </label>
// )}