'use client';

import { ReactNode } from 'react';
import * as yup from 'yup';

const messages = Object.freeze({
  required: 'Required!',
  invalidDate: 'Invalid date!',
  invalidEmail: 'Invalid email format!',
});

const useFieldValidation = () => {
  const yupField = Object.freeze({
    string: {
      required: yup.string().nullable().required(messages.required),
      optional: yup.string().nullable(),
    },
    date: {
      required: yup.date().required(messages.required).typeError(messages.invalidDate),
      optional: yup.date().nullable().typeError(messages.invalidDate),
    },
    email: {
      required: yup.string().email(messages.invalidEmail).nullable().required(messages.required),
      optional: yup.string().email(messages.invalidEmail).nullable(),
    },
    checkbox: {
      required: yup.bool().oneOf([true], messages.required),
      optional: yup.bool().nullable(),
    },
    files: {
      required: yup
        .mixed()
        .test(
          'non-empty-array',
          messages.required,
          (value) => Array.isArray(value) && !!value.length,
        ),
      optional: yup.mixed(),
    },
    select: {
      required: (options: { value: string; label: string | ReactNode }[]) =>
        yup
          .string()
          .oneOf(options.map((op) => op.value))
          .required(messages.required)
          .nullable(),
      optional: yup.mixed(),
    },
  });

  return yupField;
};

export default useFieldValidation;
