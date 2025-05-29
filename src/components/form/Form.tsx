"use client";
import { formProps } from '@/types'
import React, { Children } from 'react'
import { useRef } from 'react'

const Form = ({ children, action, className, onSubmit }: formProps) => {

    const ref = useRef<HTMLFormElement>(null);
    return (
        <form action={async (formData) => {
            await action(formData);
            ref.current?.reset();
        }} onSubmit={onSubmit} ref={ref}>
            {children}
        </form>
    )
}

export default Form


