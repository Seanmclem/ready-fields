import React, { FC } from 'react'
import './ErrorSingle.css'

export interface ErrorSingleProps {
    error: string;
    // styles?: any;
}

export const ErrorSingle: FC<ErrorSingleProps> = ({ error }) => (
    <span className={`error-single${error ? ' shown' : ''}`}>{error}</span>
)
