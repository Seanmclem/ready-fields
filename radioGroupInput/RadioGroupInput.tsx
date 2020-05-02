import React from 'react'

interface ItemsInterface {
    name: string;
    selected: boolean;
}

interface IRadioGroupInputProps {
    label?: string;
    items: Array<ItemsInterface>;
    setItems?: any;
    setSelectedItem: any;
}

export const RadioGroupInput = ({ label, items, setItems, setSelectedItem }: IRadioGroupInputProps) => {
    const handleChange = (event: any, name: string) => {
        const newArray = items.map(item => (name !== item.name ? { ...item, selected: false } : { ...item, selected: true }))
        setItems(newArray)
        const selectedItemIndex = newArray.findIndex((item) => item.name === name)
        setSelectedItem(items[selectedItemIndex]?.name)
    }

    return (
        <div className="checkbox-group-label-container">
            {label ? (
                <label>{label}</label>
            ) : null}
            <ul>
                {items.map(item => (
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
