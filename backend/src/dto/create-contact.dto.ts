import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(100)
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Subject is required' })
  @IsString()
  @MinLength(3, { message: 'Subject must be at least 3 characters' })
  @MaxLength(200)
  subject: string;

  @IsNotEmpty({ message: 'Message is required' })
  @IsString()
  @MinLength(10, { message: 'Message must be at least 10 characters' })
  @MaxLength(2000)
  message: string;
}
