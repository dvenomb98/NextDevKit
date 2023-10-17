'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useField, useFormikContext } from 'formik';
import InputWrapper from './InputWrapper';
import ErrorText from './ErrorText';

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  name: string;
  label: string;
  description?: string;
};

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, name, label, description, ...props }, ref) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField({ name });
    const errorText = meta.error && meta.touched ? meta.error : '';
    const id = `${name}-${field.name}`;

    console.log(field.value);
    return (
      <InputWrapper>
        <div className="items-top flex space-x-2">
          <CheckboxPrimitive.Root
            checked={field.value}
            name={name}
            onCheckedChange={() => setFieldValue(name, !field.value)}
            id={id}
            ref={ref}
            className={cn(
              'peer h-4 w-4 shrink-0 rounded-sm border',
              'component-focus disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-secondary-dark dark:data-[state=checked]:bg-secondary-extralight',
              'data-[state=checked]:text-white dark:data-[state=checked]:text-black',
              !!errorText ? 'border-error' : 'border-divider',

              className,
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator
              className={cn('flex items-center justify-center text-current')}
            >
              <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <div className="grid gap-1.5 leading-none">
            {!!label && (
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70  font-medium leading-none"
                htmlFor={id}
              >
                {label}
              </label>
            )}
            {!!description && <p className="small text-gray leading-none">{description}</p>}
          </div>
        </div>
        <ErrorText text={errorText} />
      </InputWrapper>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
