import React from 'react'
import './ErrorSingle.css'
import { IErrorSingleProps } from '../types'

export const ErrorSingle: React.FC<IErrorSingleProps> = ({ error }) => (
    <span className={`error-single${error ? ' shown' : ''}`}>{error}</span>
)
