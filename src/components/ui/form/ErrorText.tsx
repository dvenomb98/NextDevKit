import React, { FC } from 'react';

interface ErrorTextProps {
  text: string;
}

const ErrorText: FC<ErrorTextProps> = ({ text }) => {
  if (!text) return null;
  return <p className="text-sm text-destructive ml-2">{text}</p>;
};

export default ErrorText;
