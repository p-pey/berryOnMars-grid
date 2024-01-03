import { REG_EXP } from '../../../../utils/utility';
import { ERRORS } from '../constant';

export const validate = {
  async password(password: string): Promise<void> {
    if (REG_EXP.PASSWORD.test(password)) {
      return Promise.resolve();
    }
    return Promise.reject(ERRORS.password);
  },
  username(username: string): Promise<void> {
    if (REG_EXP.USERNAME.test(username)) {
      return Promise.resolve();
    }
    return Promise.reject(ERRORS.password);
  },
};
