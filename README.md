### TextInput

Takes 4 props; name, text, setText, and an optional label. text and setText should be useState() states.
```jsx
interface ITextInputProps {
    name: string;
    label?: string;
    text: string;
    setText: any;
}
```

### TextInput Usage

```jsx
import { TextInput } from './formFields/textInput/TextInput'

<TextInput label="Title" name="title" text={title} setText={setTitle} />
```

### CheckboxInput
Takes 3 props; name, selected, and setSelected. selected and setSelected should be useState() states.
```jsx
interface ICheckboxInputProps {
    name: string;
    selected: boolean;
    setSelected: any;
}
```

### CheckboxInput Usage
```jsx
import { CheckboxInput } from './formFields/checkboxInput/CheckboxInput'

<CheckboxInput name="IsOriginal?" selected={isOriginal} setSelected={setIsOriginal} />
```


### CheckboxGroupInput
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

### CheckboxGroupInput Usage
```jsx
import { CheckboxGroupInput } from './formFields/checkboxGroupInput/CheckboxGroupInput'

<CheckboxGroupInput items={printSizes} setItems={setPrintSizes} label="Available Sizes" />
```