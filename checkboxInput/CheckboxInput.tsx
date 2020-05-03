import React from 'react'
import { ICheckboxInputProps } from '../types'

export const CheckboxInput: React.FC<ICheckboxInputProps>
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
