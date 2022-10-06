export const maxLength = (max) => (value) => {
  if(value && max < value.length) return `Must be ${max} symbols or less`
  return undefined
};

export const required = (value) => value ? undefined : 'Required';

export const contactAddress =  value =>
value && !/https:\/\/[a-z]{1,10}\.[a-z]{2,4}\/[a-zA-Z0-9]{1,30}/i.test(value)
  ? 'Invalid address'
  : undefined

