export interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
    type?: string;
    error?: string;
    placeholder?: string;
}

export interface ItemInterface {
    name: string;
    selected: boolean;
    data?: any;
}

export interface IRadioGroupInputProps {
    label?: string;
    items: ItemInterface[];
    setItems?: (items: ItemInterface[]) => void;
    setSelectedItem: (itemName: string) => void;
}

export interface IErrorsListProps {
    errors: Array<string>;
}


export interface IErrorSingleProps {
    error: string;
}

export interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: (arg: boolean) => void;
}

export interface ICheckboxListProps {
    label?: string;
    items: ItemInterface[];
    setItems: (items: ItemInterface[]) => void;
}