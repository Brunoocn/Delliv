export interface ILoginUserResponseDTO {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IValidateUserDTO {
  email: string;
  password: string;
}

export interface IUserFiltered {
  id: string;
  name: string;
  email: string;
}
