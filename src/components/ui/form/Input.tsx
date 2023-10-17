'use client';
import { cn } from '@/lib/utils';
import { Field, useField } from 'formik';
import * as React from 'react';
import InputWrapper from './InputWrapper';
import ErrorText from './ErrorText';
import FormLabel from './FormLabel';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, label, ...props }, ref) => {
    const [field, meta] = useField({ name });
    const errorText = meta.error && meta.touched ? meta.error : '';
    const id = `${name}-${field.name}`;

    return (
      <InputWrapper>
        {!!label && <FormLabel htmlFor={id} label={label} />}
        <Field
          id={id}
          name={name}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm',
            'placeholder:text-gray',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'dark:bg-secondary-extradark',
            'component-focus',
            !!errorText
              ? 'border-error dark:border-error '
              : 'border-divider dark:border-secondary-dark',
            className,
          )}
          ref={ref}
          {...props}
        />
        <ErrorText text={errorText} />
      </InputWrapper>
    );
  },
);
Input.displayName = 'Input';

export { Input };
