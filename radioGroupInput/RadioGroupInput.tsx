import React from 'react'
import { IRadioGroupInputProps, ItemsInterface } from '../types'

export const RadioGroupInput: React.FC<IRadioGroupInputProps>
    = ({ label, items, setItems, setSelectedItem }) => {
        const handleChange = (event: any, name: string) => {
            const newArray = items.map(item => (name !== item.name ? { ...item, selected: false } : { ...item, selected: true }))
            setItems(newArray)
            const selectedItemIndex = newArray.findIndex((item: ItemsInterface) => item.name === name)
            setSelectedItem(items[selectedItemIndex]?.name)
        }

        return (
            <div className="checkbox-group-label-container">
                {label ? (
                    <label>{label}</label>
                ) : null}
                <ul>
                    {items.map((item: ItemsInterface) => (
                        <li key={item.name}>
                            <input
                                id={`size-${item.name}`}
                                name={`size-${item.name}`}
                                type="radio"
                                value={item.name}
                                checked={item.selected}
                                onChange={(e) => handleChange(e, item.name)} />
                            <label htmlFor={`size-${item.name}`}>
                                {item.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
