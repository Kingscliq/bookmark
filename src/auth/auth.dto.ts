import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class SignUpDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  firstName?: string;
  lastName?: string;
}

export interface SignInDTO {
  name: string;
  password: string;
  firstname: string;
  lastname: string;
}
