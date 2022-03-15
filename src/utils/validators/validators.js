export const maxLength = (max) => (value) => {
  if(value && max < value.length) return `Must be ${max} symbols or less`
  return undefined
};

export const required = (value) => value ? undefined : 'Required';

