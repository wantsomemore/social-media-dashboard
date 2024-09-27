import * as Yup from 'yup';

export const allowNonCyrillicSymbols =
  /^[ A-Za-z0-9~!@#№$%^&`'₴*()_\-+={}[\]|\\/:;“"’<,>.?]*$/;
export const preventRepeatedCharacters =
  /^(?!-)(?!.*[!@#$%^&*()\-_+={}[\]|\\;:'",<.>\/?]{2}).+$/i;
export const emailRegex =
  /^[a-zA-Z0-9]+([-.+][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*([.][a-zA-Z]{2,})+$/;

export const emailValidation = Yup.string()
  .email('Incorrect email')
  .matches(emailRegex, 'Incorrect email')
  .matches(preventRepeatedCharacters, 'Incorrect email')
  .test('Incorrect email', 'Incorrect email', (value) => {
    if (value) {
      return Boolean(value.match(allowNonCyrillicSymbols));
    }
    return true;
  })
  .required('Required field');

export const userSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .max(30, 'The length is limited to 40 characters.')
    .required('*required'),
  followers: Yup.number().required('*required'),
  likes: Yup.number().required('*required'),
  email: emailValidation,
});
