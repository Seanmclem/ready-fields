import React from 'react'
import './ErrorSingle.css'

interface IErrorSingleProps {
    error: string;
}

export const ErrorSingle = ({ error }: IErrorSingleProps) => (
    <span className={`error-single${error ? ' shown' : ''}`}>{error}</span>
)
