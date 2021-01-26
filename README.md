## Install

`npm i ready-fields`

<br/>

## TextInput

Takes up to 7 props; name, text, setText, and optional type, error, placeholder, label. text and setText should be useState() states.
```jsx
interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
    type?: string; // default = 'text'
    error?: string;
    placeholder?: string;
}
```

### Usage

```jsx
import { TextInput } from 'ready-fields'

<TextInput label="Title" name="title" text={title} setText={setTitle} />
```
<br/>


## CheckboxInput
Takes 3 props; name, selected, and setSelected. selected and setSelected should be useState() states.
```jsx
interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: any;
}
```

### Usage
```jsx
import { CheckboxInput } from 'ready-fields'

<CheckboxInput name="IsOriginal?" selected={isOriginal} setSelected={setIsOriginal} />
```

<br/>

## CheckboxGroupInput

Takes 3 props; items, setItems, and an optional label. items and setItems should be useState() states. Also, the items objects must each have a name and a selected value. 

```jsx
interface ItemInterface {
    name: string;
    selected: boolean;
}

interface ICheckboxListProps {
    label?: string;
    items: Array<ItemInterface>;
    setItems: any;
}
```

### Usage
```jsx
import { CheckboxGroupInput } from 'ready-fields'

<CheckboxGroupInput items={printSizes} setItems={setPrintSizes} label="Available Sizes" />
```

<br/>

## RadioGroupInput
Takes 3 or 4 props; items, setSelectedItem, and optional setItems, and an optional label. setSelectedItem, items, and setItems should be useState() states. Also, the items objects must each have a name and a selected value. 
```jsx
interface ItemInterface {
    name: string;
    selected: boolean;
}

interface IRadioGroupInputProps {
    label?: string;
    items: Array<ItemInterface>;
    setItems?: any;
    setSelectedItem: any;
}
```

### Usage
```jsx
import { CheckboxGroupInput } from 'ready-fields'

<RadioGroupInput 
    items={printSizes}
    setItems={setPrintSizes}
    setSelectedItem={setSelectedPrintSize} 
    label="Available Sizes"
/>
```
