import { loginInputs } from '..';
import { FetchApi } from '../../../../services';
import { ERRORS } from '../constant';

export async function LoginService(data: loginInputs): Promise<void> {
  if (!data.password || !data.username) return Promise.reject(ERRORS.fillInputs);
  const response = await FetchApi({
    url: `/users?username=${data.username.value}&password=${data.password.value}`,
  });
  if (response.data?.length) {
    return Promise.resolve();
  }
  return Promise.reject(ERRORS.incorectInformation);
}
