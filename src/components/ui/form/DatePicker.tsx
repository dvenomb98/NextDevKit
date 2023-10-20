import React, { FC } from 'react';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { Button } from '../Button';
import { CalendarIcon } from 'lucide-react';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';
import InputWrapper from './InputWrapper';
import FormLabel from './FormLabel';
import { cn } from '@/lib/utils';
import ErrorText from './ErrorText';

interface DatePickerProps {
  name: string;
  label?: string;
}

const DatePicker: FC<DatePickerProps> = ({ name, label }) => {
  const [field, meta] = useField({ name });
  const { setFieldValue } = useFormikContext();
  const errorText = meta.error && meta.touched ? meta.error : '';
  const date = field.value;

  return (
    <InputWrapper>
      {!!label && <FormLabel label={label} />}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal border-divider dark:border-secondary-dark',
              date ? 'text-black dark:text-white' : 'text-gray',
              errorText
                ? 'border-error dark:border-error'
                : 'border-divider dark:border-secondary-dark',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? moment(date).format('MMMM Do YYYY') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => setFieldValue(name, moment(e))}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <ErrorText text={errorText} />
    </InputWrapper>
  );
};

export default DatePicker;
