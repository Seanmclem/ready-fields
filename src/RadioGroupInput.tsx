import React, { FC } from 'react'
import { ItemInterface } from './common'

export interface IRadioGroupInputProps {
    label?: string;
    items: ItemInterface[];
    setItems?: (items: ItemInterface[]) => void;
    setSelectedItem: (itemName: string) => void;
}

export const RadioGroupInput: FC<IRadioGroupInputProps>
    = ({ label, items, setItems, setSelectedItem }) => {
        const handleChange = (_event: any, name: string) => {
            const newArray = items.map(item => (name !== item.name ? { ...item, selected: false } : { ...item, selected: true }))
            setItems && setItems(newArray)
            const selectedItemIndex = newArray.findIndex((item: ItemInterface) => item.name === name)
            setSelectedItem(items[selectedItemIndex]?.name)
        }

        return (
            <div className="checkbox-group-label-container">
                {label ? (
                    <label>{label}</label>
                ) : null}
                <ul>
                    {items.map((item: ItemInterface) => (
                        <li key={item.name}>
                            <input
                                id={`radio-${item.name}`}
                                name={`radio-${item.name}`}
                                type="radio"
                                value={item.name}
                                checked={item.selected}
                                onChange={(e) => handleChange(e, item.name)} />
                            <label htmlFor={`radio-${item.name}`}>
                                {item.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
