## Install

`npm i ready-fields`

<br/>

## TextInput

Takes 4 props; name, text, setText, and an optional label. text and setText should be useState() states.
```jsx
interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
}
```

### Usage

```jsx
import { TextInput } from './formFields/textInput/TextInput'

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
import { CheckboxInput } from './formFields/checkboxInput/CheckboxInput'

<CheckboxInput name="IsOriginal?" selected={isOriginal} setSelected={setIsOriginal} />
```

<br/>

## CheckboxGroupInput

Takes 3 props; items, setItems, and an optional label. items and setItems should be useState() states. Also, the items objects must each have a name and a selected value. 

```jsx
interface ItemsInterface {
    name: string;
    selected: boolean;
}

interface ICheckboxListProps {
    label?: string;
    items: Array<ItemsInterface>;
    setItems: any;
}
```

### Usage
```jsx
import { CheckboxGroupInput } from './formFields/checkboxGroupInput/CheckboxGroupInput'

<CheckboxGroupInput items={printSizes} setItems={setPrintSizes} label="Available Sizes" />
```

<br/>

## RadioGroupInput
Takes 3 or 4 props; items, setSelectedItem, and optional setItems, and an optional label. setSelectedItem, items, and setItems should be useState() states. Also, the items objects must each have a name and a selected value. 
```jsx
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
```

### Usage
```jsx
import { CheckboxGroupInput } from './formFields/checkboxGroupInput/CheckboxGroupInput'

<RadioGroupInput 
    items={printSizes}
    setItems={setPrintSizes}
    setSelectedItem={setSelectedPrintSize} 
    label="Available Sizes"
/>
```
