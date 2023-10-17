'use client';
import React, { FC, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/form/select/Root';
import { useField, useFormikContext } from 'formik';
import InputWrapper from '../InputWrapper';
import ErrorText from '../ErrorText';
import FormLabel from '../FormLabel';
import { cn } from '@/lib/utils';

interface SelectInputProps {
  name: string;
  options: {
    value: string;
    label: string | ReactNode;
  }[];
  placeholder?: string;
  label?: string;
}

const SelectInput: FC<SelectInputProps> = ({ name, options, placeholder, label }) => {
  const [field, meta] = useField({ name });
  const { setFieldValue } = useFormikContext();
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <InputWrapper>
      <div className="flex flex-col space-y-1">
        {!!label && <FormLabel label={label} />}
        <Select
          onValueChange={(e) => setFieldValue(name, e)}
          value={field.value}
          defaultValue={field.value}
        >
          <SelectTrigger className={cn('w-full', !!errorText && 'border-error dark:border-error')}>
            <SelectValue placeholder={placeholder && placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ErrorText text={errorText} />
    </InputWrapper>
  );
};

export default SelectInput;
