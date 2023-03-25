import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class SignInDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface SignUpDTO {
  name: string;
  password: string;
  firstname: string;
  lastname: string;
}
