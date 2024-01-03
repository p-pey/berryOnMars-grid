import { loginInputs } from '..';
import { ERRORS } from '../constant';
import { MOCK_USER_INFO } from '../../../../mock/userLoginInfo.mock.ts';

export function LoginService(data: loginInputs): Promise<void> {
  if (!data.password || !data.username) return Promise.reject(ERRORS.fillInputs);
  const isMatchUsername = data.username.value === MOCK_USER_INFO.username;
  const isMatchPassword = data.password.value === MOCK_USER_INFO.password;
  if (isMatchPassword && isMatchUsername) {
    return Promise.resolve();
  }
  return Promise.reject(ERRORS.incorectInformation);
}
