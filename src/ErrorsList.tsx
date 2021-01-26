import React, { FC } from 'react'
import './ErrorsList.css'

export interface IErrorsListProps {
    errors: Array<string>;
    // styles?: any;
}

export const ErrorsList: FC<IErrorsListProps> = ({ errors }) => (
    errors.length > 0 ? (
        <ul className="errors-list">
            {errors.map(error => (
                <li key={error}>{error}</li>
            ))}
        </ul>
    ) : null
)
