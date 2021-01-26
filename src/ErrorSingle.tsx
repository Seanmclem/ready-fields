import React, { FC } from 'react'
import './ErrorSingle.css'

export interface IErrorSingleProps {
    error: string;
}

export const ErrorSingle: FC<IErrorSingleProps> = ({ error }) => (
    <span className={`error-single${error ? ' shown' : ''}`}>{error}</span>
)
