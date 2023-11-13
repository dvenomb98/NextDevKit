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
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !!errorText && 'border-desructive dark:border-destructive ',
              
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
