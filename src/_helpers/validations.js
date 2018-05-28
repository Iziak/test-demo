const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength8 = minLength(8)
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined
const password = value =>
  value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) ?
    'Must include' : undefined
const oneLower = value =>
value && !/(?=.*[a-z])/.test(value) ? 
  'Must Include at least one lower case letter' :  undefined;
const oneUpper = value =>
value && !/(?=.*[A-Z])/.test(value) ? 
  'Must Include at least one upper case letter' :  undefined;
const oneNumber = value =>
value && !/(?=.*[0-9])/.test(value) ? 
  'Must Include at least one number' :  undefined;

export const validations = {
  required,
  maxLength,
  maxLength15,
  minLength,
  minLength8,
  number,
  minValue,
  minValue18,
  email,
  oneLower,
  oneUpper,
  oneNumber
}