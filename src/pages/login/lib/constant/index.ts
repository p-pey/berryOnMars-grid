import { loginInputs } from '..';

export const DEFAULT_LOGIN_INPUTS: loginInputs = {
  password: {
    error: undefined,
    value: undefined,
  },
  username: {
    error: undefined,
    value: undefined,
  },
};

export const ERRORS = {
  username: 'Plesae Enter Valid Username',
  password: 'Please Enter Valid Password',
  incorectInformation: 'Login Information is Incorrect',
  fillInputs: 'Please Enter All Inputs',
};
