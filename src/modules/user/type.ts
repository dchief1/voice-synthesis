export type IUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  isVerified?: boolean;

  comparePassword(candidatePassword: string): Promise<boolean>;
};
