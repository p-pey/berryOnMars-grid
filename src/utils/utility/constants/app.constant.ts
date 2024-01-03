export const TEST_CONSTANT = 'TEST';

export const REG_EXP = {
  PASSWORD: {
    value: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    test(input: string) {
      return this.value.test(input);
    },
  },
  USERNAME: {
    value: new RegExp(/^[a-zA-Z0-9]{3,50}$/),
    test(input: string) {
      return this.value.test(input);
    },
  },
};
