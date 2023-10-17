'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { useField, useFormikContext } from 'formik';
import InputWrapper from './InputWrapper';
import ErrorText from './ErrorText';

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  name: string;
  label?: string;
};

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, name, label, ...props }, ref) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField({ name });
    const errorText = meta.error && meta.touched ? meta.error : '';
    const id = `${name}-${field.name}`;

    return (
      <InputWrapper>
        <div className="items-center flex space-x-2">
          <SwitchPrimitives.Root
            checked={field.value}
            name={name}
            onCheckedChange={() => setFieldValue(name, !field.value)}
            id={id}
            className={cn(
              'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
              'component-focus disabled:cursor-not-allowed disabled:opacity-50',
              'data-[state=checked]:bg-secondary-dark data-[state=unchecked]:bg-secondary/50  dark:data-[state=checked]:bg-secondary-extralight dark:data-[state=unchecked]:bg-secondary',
              className,
            )}
            {...props}
            ref={ref}
          >
            <SwitchPrimitives.Thumb
              className={cn(
                'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-secondary-extradark',
              )}
            />
          </SwitchPrimitives.Root>
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
        <ErrorText text={errorText} />
      </InputWrapper>
    );
  },
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
