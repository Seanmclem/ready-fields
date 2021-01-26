import React, { FC } from 'react'

export interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: (arg: boolean) => void;
}

export const CheckboxInput: FC<ICheckboxInputProps>
    = ({ name, selected, setSelected }) => {

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
