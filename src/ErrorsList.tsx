import React, { FC } from 'react'
import './ErrorsList.css'

export interface ErrorsListProps {
    errors: Array<string>;
    // styles?: any;
}

export const ErrorsList: FC<ErrorsListProps> = ({ errors }) => (
    errors?.length ? (
        <ul className="errors-list">
            {errors.map(error => (
                <li key={error}>{error}</li>
            ))}
        </ul>
    )
        : null
)
