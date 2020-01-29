import React from 'react'
import './ErrorSingle.scss'

interface IErrorSingleProps {
    error: string;
}

export const ErrorSingle = ({ error }: IErrorSingleProps) => (
    <span className='error-single'>{error}</span>
)
