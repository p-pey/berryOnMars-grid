import { REG_EXP } from '../../../../utils/utility';

export const validate = {
  password(password: string) {
    return REG_EXP.PASSWORD.test(password);
  },
  username(username: string) {
    return REG_EXP.USERNAME.test(username);
  },
};
