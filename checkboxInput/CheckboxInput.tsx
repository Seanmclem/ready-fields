import React from 'react'
import './CheckboxInput.scss'

interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: any;
}

export const CheckboxInput = ({ name, selected, setSelected }: ICheckboxInputProps) => {

    const handleChange = (event: any, setSelected: any) => {
        setSelected(event.target.checked)
    }

    return (
        <div className="checkbox-label-container">
            <input
                id={`size-${name}`}
                name={`size-${name}`}
                type="checkbox"
                checked={selected}
                onChange={(e) => handleChange(e, setSelected)} />
            <label htmlFor={`size-${name}`}>
                {name}
            </label>
        </div>
    )
}
