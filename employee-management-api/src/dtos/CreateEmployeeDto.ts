import {IsAlpha, IsEmail, IsPhoneNumber, IsString, MaxLength, MinLength} from "class-validator";

export class CreateEmployeeDto {
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    firstName: string
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    lastName: String
    @IsEmail()
    email: string
    @IsPhoneNumber()
    phone: string
    @IsString()
    gender: string
}