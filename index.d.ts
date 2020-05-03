import { ITextInputProps, IRadioGroupInputProps, IErrorsListProps, IErrorSingleProps, ICheckboxInputProps, ICheckboxListProps } from './types'

declare module 'ready-fields' {
    export function TextInput(prop: ITextInputProps);

    export function RadioGroupInput(prop: IRadioGroupInputProps);

    export function ErrorsList(prop: IErrorsListProps);

    export function ErrorSingle(prop: IErrorSingleProps);

    export function CheckboxInput(prop: ICheckboxInputProps);

    export function CheckboxGroupInput(prop: ICheckboxListProps);
}