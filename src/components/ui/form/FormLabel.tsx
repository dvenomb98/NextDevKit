import React, { FC, LabelHTMLAttributes } from 'react';

interface FormLabelProps extends LabelHTMLAttributes<any> {
  label: string;
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, label, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props} className="small text-gray">
      {label}
    </label>
  );
};

export default FormLabel;
