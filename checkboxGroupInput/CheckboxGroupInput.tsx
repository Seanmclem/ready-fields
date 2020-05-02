import React from 'react'

interface ItemsInterface {
    name: string;
    selected: boolean;
}

interface ICheckboxListProps {
    label?: string;
    items: Array<ItemsInterface>;
    setItems: any;
}

export const CheckboxGroupInput = ({ label, items, setItems }: ICheckboxListProps) => {
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
                {items.map(item => (
                    <li key={item.name}>
                        <input
                            id={`size-${item.name}`}
                            name={`size-${item.name}`}
                            type="checkbox"
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
