import React from 'react'
import { ItemInterface } from './common'

export interface CheckboxGroupProps {
    label?: string;
    items: ItemInterface[];
    setItems: (items: ItemInterface[]) => void;
}

export const CheckboxGroupInput: React.FC<CheckboxGroupProps>
    = ({ label, items, setItems }) => {
        const handleChange = (event: any, name: string) => {
            const newArray = [...items]
            const itemIndex = newArray.findIndex((item) => item.name === name)
            let item = { ...newArray[itemIndex] }
            item.selected = event.target.checked
            newArray[itemIndex] = item
            setItems(newArray)
        }

        return (
            <div className="checkbox-group-label-container">
                {label ? (
                    <label>{label}</label>
                ) : null}
                <ul>
                    {items?.map(item => (
                        <li key={item.name}>
                            <input
                                id={`checkbox-${item.name}`}
                                name={`checkbox-${item.name}`}
                                type="checkbox"
                                checked={item.selected}
                                onChange={(e) => handleChange(e, item.name)} />
                            <label htmlFor={`checkbox-${item.name}`}>
                                {item.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
