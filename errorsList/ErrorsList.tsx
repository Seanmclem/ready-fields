import React from 'react'
import './ErrorsList.scss'

interface IErrorsListProps {
    errors: Array<string>;
}

export const ErrorsList = ({ errors }: IErrorsListProps) => (
    errors.length > 0 ? (
        <ul className="errors-list">
            {errors.map(error => (
                <li>{error}</li>
            ))}
        </ul>
    ) : null
)
