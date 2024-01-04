export type grid = {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  id?: string;
};

export type modalContentType = 'EDIT' | 'NEW' | 'DELETE';

export type modalContentFormState = Record<
  keyof Omit<grid, 'id'>,
  { value: string | undefined; error: string | undefined }
>;
