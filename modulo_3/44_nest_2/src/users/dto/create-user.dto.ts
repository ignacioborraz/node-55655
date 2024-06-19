export class CreateUserDto {
  _id?: string;
  email: string;
  password: string;
  role?: number;
  avatar?: string;
}
