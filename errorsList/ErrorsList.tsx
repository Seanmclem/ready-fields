import React from 'react'
import './ErrorsList.css'
import { IErrorsListProps } from '../types'

export const ErrorsList: React.FC<IErrorsListProps> = ({ errors }) => (
    errors.length > 0 ? (
        <ul className="errors-list">
            {errors.map(error => (
                <li key={error}>{error}</li>
            ))}
        </ul>
    ) : null
)
