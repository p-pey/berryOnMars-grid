export type loginInputValue = {
  value: string | undefined;
  error: string | undefined;
};

export type loginInputs = {
  username: loginInputValue;
  password: loginInputValue;
};

export type loginInputsKeys = keyof loginInputs;
