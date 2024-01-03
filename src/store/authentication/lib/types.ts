export type useAuthenticationArgs = {
  isLogged: boolean | undefined;
  updateAuthentication: (isLogged: boolean) => void;
};
